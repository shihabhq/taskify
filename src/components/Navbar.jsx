import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { userLogOut } from "../store/slices/AuthSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Box className="py-8 flex justify-between items-center flex-wrap gap-4">
      <Typography sx={{ fontWeight: 600 }} variant="h3">
        Taskify
      </Typography>
      <Button
        onClick={() => dispatch(userLogOut())}
        sx={{ px: 3, py: 1, fontWeight: 600 }}
        variant="contained"
        color="primary"
      >
        Logout
      </Button>
    </Box>
  );
};

export default Navbar;
