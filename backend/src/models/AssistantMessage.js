import mongoose from "mongoose";

const assistantMessageSchema = new mongoose.Schema(
  {
    conversation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AssistantConversation",
      required: true,
      index: true,
    },
    role: {
      type: String,
      enum: ["user", "assistant", "system"],
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    metadata: {
      selectedLanguage: { type: String, default: "" },
      code: { type: String, default: "" },
      problemId: { type: String, default: "" },
      problemTitle: { type: String, default: "" },
      sessionId: { type: String, default: "" },
      usage: {
        promptTokens: { type: Number, default: 0 },
        candidateTokens: { type: Number, default: 0 },
        totalTokens: { type: Number, default: 0 },
      },
    },
  },
  { timestamps: true }
);

assistantMessageSchema.index({ conversation: 1, createdAt: 1 });

const AssistantMessage = mongoose.model("AssistantMessage", assistantMessageSchema);

export default AssistantMessage;
