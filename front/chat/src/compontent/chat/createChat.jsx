import React from "react";
import { Button, Box } from "@mui/material";
import { createChat } from "./chatService"; // API service for creating a chat

const CreateChat = ({ userId, token }) => {
  const handleCreateChat = async () => {
    try {
      const response = await createChat(userId, token);
      alert(`Chat created with ${response.username}`);
    } catch (error) {
      alert("Error creating chat");
    }
  };

  return (
    <Box sx={{ marginTop: 2 }}>
      <Button variant="contained" color="primary" onClick={handleCreateChat}>
        Start Chat
      </Button>
    </Box>
  );
};

export default CreateChat;
