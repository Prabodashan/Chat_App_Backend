import express from "express";

import authRoutes from "./auth.route.js";
import useRoutes from "./user.route.js";
import conversationRoutes from "./conversation.route.js";
import messageRoutes from "./message.route.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", useRoutes);
router.use("/conversation", conversationRoutes);
router.use("/message", messageRoutes);

export default router;
