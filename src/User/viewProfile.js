import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function ViewProfile() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(JSON.parse(window.localStorage.getItem("loggedUser")));
  }, []);

  return (
    <Box>
      <Typography variant="h3" component="h3" sx={{ mb: 4 }}>
        User Profile
      </Typography>
      <Typography variant="h6" component="h6">
        Firstname: {userData.firstname}
      </Typography>
      <Typography variant="h6" component="h6">
        Lastname: {userData.lastname}
      </Typography>
      <Typography variant="h6" component="h6">
        UserName: {userData.username}
      </Typography>
      <Typography variant="h6" component="h6">
        Password: {userData.password}
      </Typography>
      <Typography variant="h6" component="h6">
        Role: {userData.role}
      </Typography>
    </Box>
  );
}
