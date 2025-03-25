import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Box } from "@mui/material";

const Taskboard = () => {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 8 }}>
      <TaskInput />
      <TaskList />
    </Box>
  );
};

export default Taskboard;
