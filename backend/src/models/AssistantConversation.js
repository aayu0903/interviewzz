import mongoose from "mongoose";

const assistantConversationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
      default: null,
      index: true,
    },
    problemId: {
      type: String,
      default: "",
      index: true,
    },
    title: {
      type: String,
      default: "New chat",
      trim: true,
    },
    mode: {
      type: String,
      enum: ["practice", "session"],
      required: true,
      index: true,
    },
    lastMessageAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  { timestamps: true }
);

assistantConversationSchema.index({ user: 1, mode: 1, session: 1, problemId: 1, lastMessageAt: -1 });

const AssistantConversation = mongoose.model(
  "AssistantConversation",
  assistantConversationSchema
);

export default AssistantConversation;
