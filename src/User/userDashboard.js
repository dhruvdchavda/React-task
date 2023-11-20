import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setUserData(JSON.parse(window.localStorage.getItem("loggedUser")));
  }, []);

  const navigateToProfile = () => {
    navigate("/userprofile");
  };

  const navigateToUserlist = () => {
    navigate("/allusers");
  };

  return (
    <Box>
      <Typography variant="h3" component="h3" sx={{ mb: 4 }}>
        Welcome back {userData.username}
      </Typography>
      <Button variant="contained" sx={{ mr: 2 }} onClick={navigateToProfile}>
        View Profile
      </Button>
      {userData.role === "admin" ? (
        <Button variant="contained" onClick={navigateToUserlist}>
          view all users
        </Button>
      ) : null}
    </Box>
  );
}
