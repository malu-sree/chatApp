// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const ChatPage = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');  // Clear the token
//     navigate('/');  // Redirect back to homepage
//   };

//   return (
//     <Box sx={{ padding: '20px' }}>
//       <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
//         Welcome to the Chat Page!
//       </Typography>

//       {/* Add chat features here */}
//       <Typography variant="body1" align="center" sx={{ marginBottom: '20px' }}>
//         Here you can chat with other users. Enjoy your conversation!
//       </Typography>

//       <Button
//         variant="contained"
//         color="secondary"
//         onClick={handleLogout}
//         sx={{ padding: '10px', marginTop: '20px', display: 'block', margin: '0 auto' }}
//       >
//         Logout
//       </Button>
//     </Box>
//   );
// };

// export default ChatPage;


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
        const response = await axios.get('http://localhost:5000/api/chat');
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
