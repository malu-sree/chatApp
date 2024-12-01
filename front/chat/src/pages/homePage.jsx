// import {
//     Box,
//     Container,
//     Tab,
//     TabList,
//     TabPanel,
//     TabPanels,
//     Tabs,
//     Text,
//   } from "@chakra-ui/react";
//   import { useEffect } from "react";
//   import { useHistory } from "react-router";
//   //import Login from "../components/Authentication/Login";
//   //import Signup from "../components/Authentication/Signup";
  
//   function Homepage() {
//     const history = useHistory();
  
//     useEffect(() => {
//       const user = JSON.parse(localStorage.getItem("userInfo"));
  
//       if (user) history.push("/chats");
//     }, [history]);
  
//     return (
//       <Container maxW="xl" centerContent>
//         <Box
//           d="flex"
//           justifyContent="center"
//           p={3}
//           bg="white"
//           w="100%"
//           m="40px 0 15px 0"
//           borderRadius="lg"
//           borderWidth="1px"
//         >
//           <Text fontSize="4xl" fontFamily="Work sans">
//             Talk-A-Tive
//           </Text>
//         </Box>
//         <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
//           <Tabs isFitted variant="soft-rounded">
//             <TabList mb="1em">
//               <Tab>Login</Tab>
//               <Tab>Sign Up</Tab>
//             </TabList>
//             <TabPanels>
//               <TabPanel>
//                 <Login />
//               </TabPanel>
//               <TabPanel>
//                 <Signup />
//               </TabPanel>
//             </TabPanels>
//           </Tabs>
//         </Box>
//       </Container>
//     );
//   }
  
//   export default Homepage;

import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Tabs, Tab, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Login from "../compontent/auth/login";
import Signup from "../compontent/auth/signUp";  // Corrected path

function Homepage() {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);  // State to manage the selected tab

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) navigate("/chats");
  }, [navigate]);

  // Handle tab change
  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 3,
          backgroundColor: "white",
          width: "100%",
          marginTop: "40px",
          marginBottom: "15px",
          borderRadius: "8px",
          boxShadow: 1,
        }}
      >
        <Typography variant="h3" sx={{ fontFamily: "Work sans" }}>
          Talk-A-Tive
        </Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "white",
          width: "100%",
          padding: 4,
          borderRadius: "8px",
          boxShadow: 1,
        }}
      >
        <Tabs
          value={tabIndex}  // Controlled tab state
          onChange={handleTabChange}
          variant="fullWidth"
          centered
          aria-label="Login and SignUp tabs"
          sx={{ marginBottom: "1em" }}
        >
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
        {/* Tab panels */}
        {tabIndex === 0 && (
          <Box>
            <Login />
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Signup />
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default Homepage;
