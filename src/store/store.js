import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './slices/TasksSlice'
import authReducer from './slices/AuthSlice'

const store = configureStore({
    reducer:{
        tasks:tasksReducer,
        auth: authReducer
    }
})

export default store