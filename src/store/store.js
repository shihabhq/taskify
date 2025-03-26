import { configureStore } from "@reduxjs/toolkit";
import tasksReducer, { localStorageTasksMiddleware } from "./slices/TasksSlice";
import authReducer, { localStorageAuthMiddleware } from "./slices/AuthSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      localStorageAuthMiddleware,
      localStorageTasksMiddleware
    );
  },
});

export default store;
