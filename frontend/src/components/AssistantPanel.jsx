import { useEffect, useMemo, useRef, useState } from "react";
import { BotIcon, Loader2Icon, MessageSquarePlusIcon, SendIcon } from "lucide-react";
import {
  useAssistantConversations,
  useAssistantMessages,
  useCreateAssistantConversation,
  useSendAssistantMessage,
} from "../hooks/useAssistant";

function AssistantPanel({
  mode,
  sessionId = "",
  problemId = "",
  problem = null,
  selectedLanguage = "",
  code = "",
  title = "AI Coach",
}) {
  const contextParams = useMemo(
    () => ({
      mode,
      ...(sessionId ? { sessionId } : {}),
      ...(problemId ? { problemId } : {}),
    }),
    [mode, sessionId, problemId]
  );

  const [selectedConversationId, setSelectedConversationId] = useState("");
  const [draft, setDraft] = useState("");
  const autoCreatedRef = useRef(false);

  const { data: conversationsData, isLoading: loadingConversations } =
    useAssistantConversations(contextParams);
  const createConversationMutation = useCreateAssistantConversation(contextParams);

  const conversations = conversationsData?.conversations || [];

  useEffect(() => {
    if (!selectedConversationId && conversations.length > 0) {
      setSelectedConversationId(conversations[0]._id);
    }
  }, [conversations, selectedConversationId]);

  useEffect(() => {
    if (loadingConversations || createConversationMutation.isPending || conversations.length > 0) return;
    if (autoCreatedRef.current) return;

    autoCreatedRef.current = true;
    createConversationMutation.mutate(
      {
        mode,
        sessionId: sessionId || undefined,
        problemId: problemId || undefined,
        problemTitle: problem?.title || "",
      },
      {
        onSuccess: (data) => {
          setSelectedConversationId(data.conversation._id);
        },
      }
    );
  }, [
    conversations.length,
    createConversationMutation,
    loadingConversations,
    mode,
    problem?.title,
    problemId,
    sessionId,
  ]);

  const { data: messagesData, isLoading: loadingMessages } =
    useAssistantMessages(selectedConversationId);

  const sendMessageMutation = useSendAssistantMessage(contextParams, selectedConversationId);

  const messages = messagesData?.messages || [];

  const handleNewChat = () => {
    createConversationMutation.mutate(
      {
        mode,
        sessionId: sessionId || undefined,
        problemId: problemId || undefined,
        problemTitle: problem?.title || "",
      },
      {
        onSuccess: (data) => {
          setSelectedConversationId(data.conversation._id);
        },
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const content = draft.trim();
    if (!content || !selectedConversationId) return;

    await sendMessageMutation.mutateAsync({
      conversationId: selectedConversationId,
      content,
      selectedLanguage,
      code,
      problem,
      sessionId: sessionId || undefined,
    });

    setDraft("");
  };

  return (
    <div className="h-full bg-base-200 border-l border-base-300 flex flex-col">
      <div className="p-4 border-b border-base-300 bg-base-100">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <BotIcon className="size-5 text-primary" />
            <div>
              <h2 className="font-semibold">{title}</h2>
              <p className="text-xs text-base-content/60">Step-by-step help with saved history</p>
            </div>
          </div>
          <button className="btn btn-sm btn-outline gap-2" onClick={handleNewChat}>
            <MessageSquarePlusIcon className="size-4" />
            New chat
          </button>
        </div>

        <div className="mt-3">
          <select
            className="select select-sm w-full"
            value={selectedConversationId}
            onChange={(e) => setSelectedConversationId(e.target.value)}
            disabled={loadingConversations || conversations.length === 0}
          >
            {conversations.map((conversation) => (
              <option key={conversation._id} value={conversation._id}>
                {conversation.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {loadingConversations || loadingMessages ? (
          <div className="h-full flex items-center justify-center text-base-content/60">
            <Loader2Icon className="size-6 animate-spin" />
          </div>
        ) : messages.length === 0 ? (
          <div className="text-sm text-base-content/70 bg-base-100 rounded-xl p-4 border border-base-300">
            Ask for hints, debugging help, an approach breakdown, or next steps for this problem.
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message._id}
              className={`rounded-2xl p-3 text-sm whitespace-pre-wrap ${
                message.role === "assistant"
                  ? "bg-base-100 border border-base-300"
                  : "bg-primary text-primary-content ml-6"
              }`}
            >
              <p className="text-[11px] uppercase tracking-wide opacity-70 mb-1">
                {message.role === "assistant" ? "Coach" : "You"}
              </p>
              {message.content}
            </div>
          ))
        )}

        {sendMessageMutation.isPending && (
          <div className="rounded-2xl p-3 text-sm bg-base-100 border border-base-300 text-base-content/70">
            <Loader2Icon className="size-4 animate-spin inline mr-2" />
            Thinking through the next step...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-base-300 bg-base-100">
        <textarea
          className="textarea textarea-bordered w-full min-h-24"
          placeholder="Ask for a hint, debugging help, or a step-by-step plan..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <div className="flex justify-between items-center mt-3">
          <p className="text-xs text-base-content/60">
            The coach uses your current code and problem context.
          </p>
          <button
            type="submit"
            className="btn btn-primary btn-sm gap-2"
            disabled={!selectedConversationId || sendMessageMutation.isPending || !draft.trim()}
          >
            <SendIcon className="size-4" />
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default AssistantPanel;
