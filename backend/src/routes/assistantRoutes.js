import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  createConversation,
  getConversationMessages,
  listConversations,
  sendConversationMessage,
} from "../controllers/assistantController.js";

const router = express.Router();

router.get("/conversations", protectRoute, listConversations);
router.post("/conversations", protectRoute, createConversation);
router.get("/conversations/:id/messages", protectRoute, getConversationMessages);
router.post("/conversations/:id/messages", protectRoute, sendConversationMessage);

export default router;
