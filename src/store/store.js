import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/TasksSlice";
import authReducer, { localStorageMiddleware } from "./slices/AuthSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(localStorageMiddleware);
  },
});

export default store;
