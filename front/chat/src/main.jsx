// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// //import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <ChakraProvider> Wrap your app with ChakraProvider */}
//       <BrowserRouter> {/* Wrap your app with BrowserRouter */}
//         <App />
//       </BrowserRouter>
//     {/* </ChakraProvider> */}
//   </StrictMode>
// );


import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter here
import App from './App';
import ChatProvider from './contex/chatProvider';

const root = createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  {/* <ChatProvider>  Only one Router should be here */}
    <App />
    {/* </ChatProvider> */}
  </BrowserRouter>
 
);
