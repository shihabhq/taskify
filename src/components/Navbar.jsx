import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Box className="py-8 flex justify-between items-center flex-wrap gap-4">
      <Typography sx={{ fontWeight: 600 }} variant="h3">
        Taskify
      </Typography>
      <Button sx={{px:3,py:1,fontWeight:600}} variant="contained" color="primary">
        Logout
      </Button>
    </Box>
  );
};

export default Navbar;
