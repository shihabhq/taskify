import { configureStore } from "@reduxjs/toolkit";
import tasksReducer, { localStorageTasksMiddleware } from "./slices/TasksSlice";
import authReducer, { localStorageAuthMiddleware } from "./slices/AuthSlice";
import activityReducer from "./slices/ActivitySlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
    activity: activityReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      localStorageAuthMiddleware,
      localStorageTasksMiddleware
    );
  },
});

export default store;
