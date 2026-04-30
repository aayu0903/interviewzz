import { GoogleGenAI } from "@google/genai";
import { ENV } from "./env.js";

let client = null;

function getClient() {
  if (!ENV.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  if (!client) {
    client = new GoogleGenAI({ apiKey: ENV.GEMINI_API_KEY });
  }

  return client;
}

export async function generateAssistantReply({ conversation, prompt, context }) {
  const ai = getClient();

  const contents = conversation.map((message, index) => {
    const isLastUserMessage = message.role === "user" && index === conversation.length - 1;

    return {
      role: message.role === "assistant" ? "model" : "user",
      parts: [
        {
          text: isLastUserMessage
            ? buildPrompt(prompt || message.content, context)
            : message.content,
        },
      ],
    };
  });

  const response = await ai.models.generateContent({
    model: ENV.GEMINI_MODEL,
    contents,
    config: {
      systemInstruction: buildSystemInstruction(),
      temperature: 0.5,
    },
  });

  const text = response.text?.trim?.() || "";

  return {
    text:
      text ||
      "I could not generate a response yet. Please try asking again with a bit more detail.",
    usage: {
      promptTokens: response.usageMetadata?.promptTokenCount || 0,
      candidateTokens: response.usageMetadata?.candidatesTokenCount || 0,
      totalTokens: response.usageMetadata?.totalTokenCount || 0,
    },
  };
}

function buildSystemInstruction() {
  return [
    "You are an interview-prep coding assistant inside a coding platform.",
    "Give step-by-step guidance, hints, debugging help, and concise explanations.",
    "Prefer leading questions and small next steps over full solutions.",
    "Do not reveal the full final answer unless the user explicitly asks for it.",
    "When code is shared, reference likely bugs, edge cases, or next edits.",
    "Keep formatting simple and easy to scan.",
  ].join("\n");
}

function buildPrompt(prompt, context) {
  const sections = [
    "User request:",
    prompt,
    "",
    "Context:",
    `Mode: ${context.mode || "practice"}`,
  ];

  if (context.problemTitle) sections.push(`Problem title: ${context.problemTitle}`);
  if (context.problemId) sections.push(`Problem id: ${context.problemId}`);
  if (context.selectedLanguage) sections.push(`Language: ${context.selectedLanguage}`);
  if (context.sessionSummary) sections.push(`Live session: ${context.sessionSummary}`);

  if (context.problemDescription) {
    sections.push("", "Problem description:", context.problemDescription);
  }

  if (context.examples?.length) {
    sections.push("", "Examples:");
    for (const example of context.examples.slice(0, 3)) {
      sections.push(`- Input: ${example.input}`);
      sections.push(`  Output: ${example.output}`);
      if (example.explanation) sections.push(`  Explanation: ${example.explanation}`);
    }
  }

  if (context.constraints?.length) {
    sections.push("", "Constraints:");
    for (const constraint of context.constraints.slice(0, 5)) {
      sections.push(`- ${constraint}`);
    }
  }

  if (context.code) {
    sections.push("", "Current code:", "```", context.code, "```");
  }

  sections.push("", "Respond with practical next steps.");
  return sections.join("\n");
}
