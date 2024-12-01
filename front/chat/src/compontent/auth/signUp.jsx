// import React, { useState } from 'react';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Simple validation
//     if (!email || !password || !confirmPassword) {
//       setError('Please fill in all fields.');
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     // Simulate API call for signup
//     alert('Sign Up successful!');
//     // Redirect to login or dashboard
//   };

//   return (
//     <div style={{ width: '300px', margin: 'auto', paddingTop: '50px' }}>
//       <h2>Sign Up</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSignup}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
//           />
//         </div>
//         <div>
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
//           />
//         </div>
//         <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;



// import React, { useState } from "react";
// import { TextField, Button, Box, Typography, InputLabel, Input } from "@mui/material";
// import axios from "axios";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [profilePic, setProfilePic] = useState(null);

//   // Handle file input
//   const handleFileChange = (e) => {
//     setProfilePic(e.target.files[0]);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("username", username);
//     formData.append("email", email);
//     formData.append("password", password);
//     if (profilePic) {
//       formData.append("profilePic", profilePic);
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/user/signup",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       alert(response.data.message);
//     } catch (error) {
//       alert("Error signing up");
//     }
//   };

//   return (
//     <Box sx={{ padding: "20px" }}>
//       <Typography variant="h5" align="center" sx={{ marginBottom: "20px" }}>
//         Create an Account
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Username"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           required
//         />
//         <TextField
//           label="Password"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           required
//         />

//         <Box sx={{ marginBottom: "20px" }}>
//           <InputLabel htmlFor="profilePic">Profile Picture</InputLabel>
//           <Input
//             id="profilePic"
//             type="file"
//             onChange={handleFileChange}
//             fullWidth
//             sx={{ marginBottom: "10px" }}
//           />
//         </Box>

//         <Button
//           variant="contained"
//           color="primary"
//           fullWidth
//           type="submit"
//           sx={{ padding: "10px" }}
//         >
//           Sign Up
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { TextField, Button, Box, Typography, InputLabel, Input } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation after signup

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  // const navigate = useNavigate(); // Use navigate to redirect after sign-up

  // Handle file input
  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    if (profilePic) {
      formData.append("profilePic", profilePic);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);

      // Redirect to login page after successful sign up
      // navigate("/login");
    } catch (error) {
      alert("Error signing up");
    }
  };

  return (
    <Box className="container mt-5">
      <div className="card p-4">
        <Typography variant="h5" align="center" className="mb-4">
          Create an Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <div className="form-group mb-3">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              required
            />
          </div>

          <div className="form-group mb-3">
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              required
            />
          </div>

          <div className="form-group mb-3">
            <InputLabel htmlFor="profilePic">Profile Picture</InputLabel>
            <Input
              id="profilePic"
              type="file"
              onChange={handleFileChange}
              fullWidth
              className="form-control"
            />
          </div>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            className="btn btn-primary mt-3"
          >
            Sign Up
          </Button>
        </form>

        <div className="mt-3 text-center">
          <Typography variant="body2">
            Already have an account?{" "}
            <a href="/login" className="text-primary">
              Login here
            </a>
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default Signup;
