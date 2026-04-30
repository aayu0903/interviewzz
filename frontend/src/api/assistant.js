import axiosInstance from "../lib/axios";

export const assistantApi = {
  listConversations: async (params) => {
    const response = await axiosInstance.get("/assistant/conversations", { params });
    return response.data;
  },

  createConversation: async (data) => {
    const response = await axiosInstance.post("/assistant/conversations", data);
    return response.data;
  },

  getConversationMessages: async (conversationId) => {
    const response = await axiosInstance.get(`/assistant/conversations/${conversationId}/messages`);
    return response.data;
  },

  sendMessage: async ({ conversationId, ...data }) => {
    const response = await axiosInstance.post(
      `/assistant/conversations/${conversationId}/messages`,
      data
    );
    return response.data;
  },
};
