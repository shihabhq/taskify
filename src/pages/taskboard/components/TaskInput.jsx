import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const categories = ["General", "weather", "news", "sports", "entertainment"];

const priorities = ["High", "Medium", "Low"];

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("General");
  const [priority, setPriority] = useState("Medium");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ padding: 3, borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h5" fontWeight={600} mb={1}>
        Add New Task
      </Typography>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <label className="font-medium" htmlFor="description">
            Task Description
          </label>
          <TextField fullWidth id="description" required variant="outlined" />
        </div>
        <div className="flex flex-col gap-0.5">
          <label className="font-medium" htmlFor="Select-category">
            Category
          </label>
          <TextField
            id="Select-category"
            select
            defaultValue="weather"
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
            select
            defaultValue="Medium"
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
        <Button type="submit" variant="contained" sx={{ fontWeight: 600, fontSize: 16 }}>
          Add Task
        </Button>
      </form>
    </Box>
  );
};

export default TaskInput;
