


import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ChatPage = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);
  
  // Fetch chat data on component mount
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/chats');
        setChats(response.data);  // Store chat data in state
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    fetchChats();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');  // Clear the token
    navigate('/');  // Redirect to homepage
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
        Welcome to the Chat Page!
      </Typography>

      {/* Display chat messages */}
      <Paper sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" sx={{ marginBottom: '10px' }}>
          Chats
        </Typography>
        {chats.length > 0 ? (
          <List>
            {chats.map((chat, index) => (
              <ListItem key={index}>
                <ListItemText primary={chat.message} secondary={`By: ${chat.user}`} />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No chats available</Typography>
        )}
      </Paper>

      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        sx={{ padding: '10px', marginTop: '20px', display: 'block', margin: '0 auto' }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default ChatPage;

// import React, { useState } from "react";
// import { Container, Paper, Box, Typography } from "@mui/material";
// import SearchUser from "../compontent/chat/searchUser";
// import CreateChat from "../compontent/chat/createChat"; // Import the CreateChat component

// const ChatPage = () => {
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   const handleChatCreate = (userId) => {
//     setSelectedUserId(userId);
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper sx={{ padding: 3 }}>
//         <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
//           Search for Users to Chat
//         </Typography>

//         {!selectedUserId ? (
//           <SearchUser onChatCreate={handleChatCreate} />
//         ) : (
//           <CreateChat userId={selectedUserId} token={token} />
//         )}
//       </Paper>
//     </Container>
//   );
// };

// export default ChatPage;


// import React, { useState, useEffect } from "react";
// import { Container, Paper, Box, Typography } from "@mui/material";
// import SearchUser from "../compontent/chat/searchUser";
// import CreateChat from "../compontent/chat/createChat"; // Import the CreateChat component
// import { ChatState } from "../contex/chatProvider";  // Import ChatState to use context

// const ChatPage = () => {
//   const { user, setUser, selectedChat, setSelectedChat } = ChatState();  // Accessing context
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   // Setting up user in context if not already set
//   useEffect(() => {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//     if (userInfo) {
//       setUser(userInfo);
//     } else {
//       // Redirect or show login if user is not authenticated
//     }
//   }, [setUser]);

//   const handleChatCreate = (userId) => {
//     setSelectedChat(userId);  // Set selected chat to start a conversation with a user
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper sx={{ padding: 3 }}>
//         <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
//           Search for Users to Chat
//         </Typography>

//         {!selectedChat ? (
//           <SearchUser onChatCreate={handleChatCreate} />
//         ) : (
//           <CreateChat userId={selectedChat} token={token} />
//         )}
//       </Paper>
//     </Container>
//   );
// };

// export default ChatPage;
