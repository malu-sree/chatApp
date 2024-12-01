// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Simple validation
//     if (!email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     // Simulate API call for login
//     if (email === 'test@example.com' && password === 'password123') {
//       alert('Login successful!');
//       // Redirect to another page, e.g. home/dashboard
//     } else {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div style={{ width: '300px', margin: 'auto', paddingTop: '50px' }}>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleLogin}>
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
//         <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.post('http://localhost:5000/api/user/login', {
//         email,
//         password,
//       });
//       alert(response.data.message);
//       localStorage.setItem('token', response.data.token);
//     } catch (error) {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Used for redirecting after login

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        email,
        password,
      });
      alert(response.data.message);
      localStorage.setItem('token', response.data.token);
      navigate('/chats');  // Redirect to the chats page after successful login
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" align="center" sx={{ marginBottom: '20px' }}>
        Login to Your Account
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ padding: '10px', marginTop: '20px' }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;

