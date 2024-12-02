

// import React, { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";  // Update to useNavigate

// const ChatContext = createContext();

// const ChatProvider = ({ children }) => {
//   const [selectedChat, setSelectedChat] = useState();
//   const [user, setUser] = useState();
//   const [notification, setNotification] = useState([]);
//   const [chats, setChats] = useState();

//   const navigate = useNavigate();  // Use useNavigate instead of useHistory

//   useEffect(() => {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//     setUser(userInfo);

//     if (!userInfo) navigate("/");  // Use navigate instead of history.push
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [navigate]);

//   return (
//     <ChatContext.Provider
//       value={{
//         selectedChat,
//         setSelectedChat,
//         user,
//         setUser,
//         notification,
//         setNotification,
//         chats,
//         setChats,
//       }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const ChatState = () => {
//   return useContext(ChatContext);
// };

// export default ChatProvider;


import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // This is fine here

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  const navigate = useNavigate();  // Use useNavigate here

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) navigate("/");  // This is fine, use navigate to redirect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
