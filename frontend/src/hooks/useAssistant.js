import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { assistantApi } from "../api/assistant";

export function useAssistantConversations(params) {
  return useQuery({
    queryKey: ["assistant-conversations", params],
    queryFn: () => assistantApi.listConversations(params),
  });
}

export function useCreateAssistantConversation(params) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: assistantApi.createConversation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["assistant-conversations", params] });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to create assistant chat");
    },
  });
}

export function useAssistantMessages(conversationId) {
  return useQuery({
    queryKey: ["assistant-messages", conversationId],
    queryFn: () => assistantApi.getConversationMessages(conversationId),
    enabled: !!conversationId,
  });
}

export function useSendAssistantMessage(params, conversationId) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: assistantApi.sendMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["assistant-messages", conversationId] });
      queryClient.invalidateQueries({ queryKey: ["assistant-conversations", params] });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to send message");
    },
  });
}
