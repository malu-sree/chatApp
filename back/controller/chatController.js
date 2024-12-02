const Chat = require("../models/chatModels");
const User = require("../models/userModel");

const chatController = {
  // Create or fetch a one-on-one chat
  async accessChat(req, res) {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "UserId is required" });
    }

    try {
      // Check if chat already exists
      let chat = await Chat.findOne({
        isGroupChat: false,
        $and: [
          { users: { $elemMatch: { $eq: req.user._id } } },
          { users: { $elemMatch: { $eq: userId } } },
        ],
      })
        .populate("users", "-password")
        .populate("latestMessage");

      if (chat) {
        return res.status(200).json(chat);
      }

      // Create new one-on-one chat if it doesn't exist
      const newChat = await Chat.create({
        chatName: "sender", // Default name
        isGroupChat: false,
        users: [req.user._id, userId],
      });

      const fullChat = await Chat.findById(newChat._id).populate("users", "-password");
      res.status(201).json(fullChat);
    } catch (err) {
      res.status(500).json({ message: "Error creating chat", error: err });
    }
  },

  // Fetch all chats for the logged-in user
  async fetchChats(req, res) {
    try {
      const chats = await Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
        .populate("users", "-password")
        .populate("latestMessage")
        .sort({ updatedAt: -1 });

      res.status(200).json(chats);
    } catch (err) {
      res.status(500).json({ message: "Error fetching chats", error: err });
    }
  },
};

module.exports = chatController;
