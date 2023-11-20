import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../DB/db";
import { useLiveQuery } from "dexie-react-hooks";
import {
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

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const isUser = useLiveQuery(
    async () => await db.users.where("username").equals(userName).toArray(),
    [userName, password]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isUser.length) {
      setErrorMsg("User not found. Create new account.");
    } else {
      if (isUser[0].password === password) {
        window.localStorage.setItem("loggedUser", JSON.stringify(isUser[0]));
        navigate("/user");
      } else {
        setErrorMsg("Username or password incorrect");
      }
    }
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
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            required
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
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
          {errorMsg ? (
            <Typography variant="p" component="p" color="error">
              {errorMsg}
            </Typography>
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
