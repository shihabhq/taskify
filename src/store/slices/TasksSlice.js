/**
 *
 * task object looks like this way
 * {
 * id:1,
 * title:'task title',
 * priority:'medium',
 * activity:{
 * text:"weather info or others"
 * }
 * }
 */

import { createSlice } from "@reduxjs/toolkit";

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
  loading: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    //initiate loading
    initiateLoading: (state) => {
      state.loading = true;
    },
    //adding all tasks through api or localstorage
    setTasks: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },

    //adding a particular task at the bottom
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    //deleting a particular task
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, initiateLoading, removeTask, setTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
