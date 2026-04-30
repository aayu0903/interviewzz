import AssistantConversation from "../models/AssistantConversation.js";
import AssistantMessage from "../models/AssistantMessage.js";
import Session from "../models/Session.js";
import { generateAssistantReply } from "../lib/gemini.js";

export async function createConversation(req, res) {
  try {
    const { mode, sessionId, problemId, problemTitle } = req.body;

    if (!mode || !["practice", "session"].includes(mode)) {
      return res.status(400).json({ message: "A valid mode is required" });
    }

    if (mode === "session" && !sessionId) {
      return res.status(400).json({ message: "sessionId is required for session chats" });
    }

    const session = await getAuthorizedSession(sessionId, req.user);
    if (sessionId && !session) {
      return res.status(403).json({ message: "You do not have access to this live session" });
    }

    const conversation = await AssistantConversation.create({
      user: req.user._id,
      session: session?._id || null,
      problemId: problemId || "",
      mode,
      title: problemTitle ? `${problemTitle} help` : `New ${mode} chat`,
      lastMessageAt: new Date(),
    });

    res.status(201).json({ conversation });
  } catch (error) {
    console.error("Error in createConversation controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function listConversations(req, res) {
  try {
    const { mode, sessionId, problemId } = req.query;

    const query = { user: req.user._id };
    if (mode) query.mode = mode;
    if (problemId) query.problemId = problemId;

    if (sessionId) {
      const session = await getAuthorizedSession(sessionId, req.user);
      if (!session) {
        return res.status(403).json({ message: "You do not have access to this live session" });
      }
      query.session = session._id;
    }

    const conversations = await AssistantConversation.find(query)
      .sort({ lastMessageAt: -1, updatedAt: -1 })
      .limit(20);

    res.status(200).json({ conversations });
  } catch (error) {
    console.error("Error in listConversations controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getConversationMessages(req, res) {
  try {
    const conversation = await AssistantConversation.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    const messages = await AssistantMessage.find({ conversation: conversation._id }).sort({
      createdAt: 1,
    });

    res.status(200).json({ conversation, messages });
  } catch (error) {
    console.error("Error in getConversationMessages controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function sendConversationMessage(req, res) {
  try {
    const conversation = await AssistantConversation.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    const {
      content,
      selectedLanguage,
      code,
      problem,
      sessionId,
    } = req.body;

    if (!content?.trim()) {
      return res.status(400).json({ message: "Message content is required" });
    }

    const session = await getAuthorizedSession(sessionId || conversation.session, req.user);
    if ((sessionId || conversation.session) && !session) {
      return res.status(403).json({ message: "You do not have access to this live session" });
    }

    const userMessage = await AssistantMessage.create({
      conversation: conversation._id,
      role: "user",
      content: content.trim(),
      metadata: {
        selectedLanguage: selectedLanguage || "",
        code: code || "",
        problemId: problem?.id || conversation.problemId || "",
        problemTitle: problem?.title || "",
        sessionId: session?._id?.toString?.() || "",
      },
    });

    const previousMessages = await AssistantMessage.find({ conversation: conversation._id })
      .sort({ createdAt: 1 })
      .limit(12);

    const assistantReply = await generateAssistantReply({
      conversation: previousMessages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
      prompt: "",
      context: {
        mode: conversation.mode,
        selectedLanguage,
        code,
        problemId: problem?.id || conversation.problemId || "",
        problemTitle: problem?.title || "",
        problemDescription: problem?.description?.text || "",
        examples: problem?.examples || [],
        constraints: problem?.constraints || [],
        sessionSummary: session
          ? `${session.problem} (${session.status}) with host ${session.host?.toString?.() || ""}`
          : "",
      },
    });

    const assistantMessage = await AssistantMessage.create({
      conversation: conversation._id,
      role: "assistant",
      content: assistantReply.text,
      metadata: {
        selectedLanguage: selectedLanguage || "",
        code: code || "",
        problemId: problem?.id || conversation.problemId || "",
        problemTitle: problem?.title || "",
        sessionId: session?._id?.toString?.() || "",
        usage: assistantReply.usage,
      },
    });

    if (conversation.title.startsWith("New ") || conversation.title === "New chat") {
      conversation.title = buildConversationTitle(problem?.title, content);
    }
    conversation.lastMessageAt = assistantMessage.createdAt;
    await conversation.save();

    res.status(201).json({
      conversation,
      userMessage,
      assistantMessage,
    });
  } catch (error) {
    console.error("Error in sendConversationMessage controller:", error);

    // @google/genai throws ApiError with `status`
    const status = Number(error?.status);
    if (status === 429) {
      // Gemini often returns retry info in error.details
      const retryInfo = Array.isArray(error?.error?.details)
        ? error.error.details.find((d) => d?.["@type"]?.includes("RetryInfo"))
        : null;
      const retryDelay = retryInfo?.retryDelay || "";
      const retryAfterSeconds = Number.parseInt(String(retryDelay).replace(/[^\d]/g, ""), 10);

      return res.status(429).json({
        message:
          "AI quota exceeded for the configured Gemini project/key. Please try again shortly, or enable billing / increase quota for the Gemini API project.",
        retryAfterSeconds: Number.isFinite(retryAfterSeconds) ? retryAfterSeconds : 30,
      });
    }

    if (status === 400) {
      return res.status(502).json({
        message:
          "AI provider rejected the request. Check GEMINI_API_KEY / GEMINI_MODEL and ensure the Gemini API is enabled for this project.",
      });
    }

    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
}

function buildConversationTitle(problemTitle, prompt) {
  if (problemTitle) return `${problemTitle} help`;
  return prompt.trim().slice(0, 60) || "New chat";
}

async function getAuthorizedSession(sessionId, user) {
  if (!sessionId) return null;

  const session = await Session.findById(sessionId);
  if (!session) return null;

  const isAllowed =
    session.host?.toString() === user._id.toString() ||
    session.participant?.toString() === user._id.toString();

  return isAllowed ? session : null;
}
