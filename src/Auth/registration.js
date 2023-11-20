import React, { useState } from "react";
import { db } from "../DB/db";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [showAlert, setShowAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.users
      .add({
        firstname: firstName,
        lastname: lastName,
        username: userName,
        password: password,
        role: role,
      })
      .then(() => {
        setShowAlert(true);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((e) => {
        setErrorMsg(true);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {showAlert ? (
          <Alert severity="success" sx={{ mb: 2 }}>
            Account created successfully!
          </Alert>
        ) : null}
        {errorMsg ? (
          <Alert severity="error" sx={{ mb: 2 }}>
            Account already exist!
          </Alert>
        ) : null}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            required
            margin="normal"
            fullWidth
            id="firstname"
            label="First name"
            name="firstname"
            autoComplete="firstname"
            autoFocus
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
            autoComplete="lastname"
            onChange={(event) => setLastName(event.target.value)}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            onChange={(event) => setUserName(event.target.value)}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="role"
                color="primary"
                onChange={(event) =>
                  setRole(event.target.checked ? "admin" : "user")
                }
              />
            }
            label="Are you admin?"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/login" variant="body2">
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
