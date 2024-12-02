import axios from "axios";

// Create a one-on-one chat
export const createChat = async (userId, token) => {
    const { data } = await axios.post(
      "http://localhost:5000/api/chat",
      { userId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  };

