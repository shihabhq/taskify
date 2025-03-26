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
};
//movies: https://jsonfakery.com/movies/random
//books: https://www.googleapis.com/books/v1/volumes?q=love&startIndex=250&maxResults=1
//http://api.weatherapi.com/v1/current.json?key=&q={location}&aqi=no

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
  },
});

export const localStorageTasksMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type?.includes("tasks")) {
    localStorage.setItem("tasks", JSON.stringify(store.getState().tasks.tasks));
  }

  return result;
};

export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
