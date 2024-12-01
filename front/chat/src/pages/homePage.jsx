


// import React, { useEffect, useState } from "react";
// import { Container, Box, Typography, Tabs, Tab, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Login from "../compontent/auth/login";
// import Signup from "../compontent/auth/signUp";  // Corrected path

// function Homepage() {
//   const navigate = useNavigate();
//   const [tabIndex, setTabIndex] = useState(0);  // State to manage the selected tab

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("userInfo"));
//     if (user) navigate("/chats");
//   }, [navigate]);

//   // Handle tab change
//   const handleTabChange = (event, newIndex) => {
//     setTabIndex(newIndex);
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           padding: 3,
//           backgroundColor: "white",
//           width: "100%",
//           marginTop: "40px",
//           marginBottom: "15px",
//           borderRadius: "8px",
//           boxShadow: 1,
//         }}
//       >
//         <Typography variant="h3" sx={{ fontFamily: "Work sans" }}>
//           Talk-A-Tive
//         </Typography>
//       </Box>
//       <Paper
//         elevation={3}
//         sx={{
//           backgroundColor: "white",
//           width: "100%",
//           padding: 4,
//           borderRadius: "8px",
//           boxShadow: 1,
//         }}
//       >
//         <Tabs
//           value={tabIndex}  // Controlled tab state
//           onChange={handleTabChange}
//           variant="fullWidth"
//           centered
//           aria-label="Login and SignUp tabs"
//           sx={{ marginBottom: "1em" }}
//         >
//           <Tab label="Login" />
//           <Tab label="Sign Up" />
//         </Tabs>
//         {/* Tab panels */}
//         {tabIndex === 0 && (
//           <Box>
//             <Login />
//           </Box>
//         )}
//         {tabIndex === 1 && (
//           <Box>
//             <Signup />
//           </Box>
//         )}
//       </Paper>
//     </Container>
//   );
// }

// export default Homepage;


import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Tabs, Tab, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Login from "../compontent/auth/login";
import Signup from "../compontent/auth/signUp";  // Corrected path
import img1 from "../images/img1.png" ;  // Import your background image

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
    <Box
      sx={{
        backgroundImage: `url(${img1})`, // Use the imported image as the background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the entire viewport height
        paddingTop: "50px",
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center', // Center the content vertically
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 3,
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background to make the text readable
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
    </Box>
  );
}

export default Homepage;

