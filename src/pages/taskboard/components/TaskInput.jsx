import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../store/slices/TasksSlice";

const categories = ["General", "Outdoor", "Learning", "Movies"];

const priorities = ["High", "Medium", "Low"];

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("General");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const id = nanoid();

    const newTask = {
      completed: false,
      id,
      date: new Date().toLocaleDateString(),
      title: task,
      priority,
      category,
    };

    dispatch(addTask(newTask));
    setTask("");
  };

  return (
    <Box
      sx={{ padding: 3, borderRadius: 2, boxShadow: 1, height: "fit-content" }}
    >
      <Typography variant="h5" fontWeight={600} mb={1}>
        Add New Task
      </Typography>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <label className="font-medium" htmlFor="description">
            Task Description
          </label>
          <TextField
            fullWidth
            value={task}
            onChange={(e) => setTask(e.target.value)}
            id="description"
            required
            variant="outlined"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label className="font-medium" htmlFor="Select-category">
            Category
          </label>
          <TextField
            id="Select-category"
            value={category}
            select
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            required
          >
            {categories.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="flex flex-col gap-0.5">
          <label className="font-medium" htmlFor="Select-priority">
            Set Priority
          </label>
          <TextField
            id="Select-priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            select
            fullWidth
            required
          >
            {priorities.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Button
          type="submit"
          variant="contained"
          sx={{ fontWeight: 600, fontSize: 16 }}
        >
          Add Task
        </Button>
      </form>
    </Box>
  );
};

export default TaskInput;
