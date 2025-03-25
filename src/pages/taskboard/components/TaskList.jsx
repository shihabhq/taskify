import { Box, Typography } from "@mui/material";
import React from "react";

const TaskList = () => {
  return (
    <Box
      sx={{ height: "fit-content", padding: 3, borderRadius: 2, boxShadow: 1 }}
    >
      <Typography variant="h5" fontWeight={600} mb={1}>
        Task List
      </Typography>
      <Box>
        <Typography
          variant="body1"
          className="text-gray-600"
          sx={{ fontWeight: 500 }}
        >
          No task added yet
        </Typography>
      </Box>
    </Box>
  );
};

export default TaskList;
