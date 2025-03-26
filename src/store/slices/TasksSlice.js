/**
 *
 * task object looks like this way
 * {
 * id:1,
 * title:'task title',
 * priority:'medium',
 * activity:{
 * loading:false,
 * error:'',
 * info:{}
 * }
 * }
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    return tasks;
  } else {
    localStorage.setItem("tasks", JSON.stringify([]));
    return [];
  }
};

const initialState = {
  tasks: loadTasks(),
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //adding a particular task at the bottom
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    //deleting a particular task
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    //completed task persistency
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      task.completed = action.payload.completed;
    },
  },
});

export const localStorageTasksMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type?.includes("tasks")) {
    localStorage.setItem("tasks", JSON.stringify(store.getState().tasks.tasks));
  }

  return result;
};

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;
