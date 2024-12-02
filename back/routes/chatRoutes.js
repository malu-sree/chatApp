const express = require("express");
const chatController = require("../controller/chatController");
const { protect } = require("../middleware/authMiddleware"); // Middleware to protect routes

const router = express.Router();

// Route to create or fetch one-on-one chat
router.post("/", protect, chatController.accessChat);

// Route to fetch all chats for the logged-in user
router.get("/", protect, chatController.fetchChats);

module.exports = router;
