import { Box } from "@mui/material";
import React, { useState } from "react";

import { TextField, Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/slices/AuthSlice";
import { useNavigate } from "react-router";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin({ email }));
    navigate("/");
  };

  if (status?.isLoggedIn) {
    return (
      <Container sx={{ textAlign: "center", my: 10 }}>
        <Typography variant="h4">You are already logged in</Typography>
      </Container>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 400,
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4">Login</Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Email"
            placeholder="Enter your email"
            variant="outlined"
            fullWidth
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            placeholder="Enter your password"
            type="password"
            fullWidth
            margin="normal"
            required
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default AuthPage;
