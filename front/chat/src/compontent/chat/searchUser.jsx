import React, { useState } from "react";
import { TextField, Button, List, ListItem, ListItemText, Box } from "@mui/material";
import { fetchUsers } from "./userService"; // Function to fetch users

const SearchUser = ({ onChatCreate }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm) return;
    setLoading(true);

    try {
      const result = await fetchUsers(searchTerm);
      setUsers(result);
    } catch (error) {
      console.error("Error searching users:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <TextField
        label="Search Users"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch} disabled={loading}>
        Search
      </Button>
      <List sx={{ marginTop: 2 }}>
        {users.length > 0 ? (
          users.map((user) => (
            <ListItem key={user._id} button onClick={() => onChatCreate(user._id)}>
              <ListItemText primary={user.username} />
            </ListItem>
          ))
        ) : (
          <ListItem>No users found</ListItem>
        )}
      </List>
    </Box>
  );
};

export default SearchUser;
