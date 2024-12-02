
import axios from "axios";

export const fetchUsers = async (searchTerm, token) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/user/search?term=${searchTerm}`, {
        headers: {
          Authorization: `Bearer ${token}`,  // Sending the token in the Authorization header
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error searching users:", error);
      throw error;
    }
  };

