import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchWeather = createAsyncThunk(
  "activity/fetchWeather",
  async (location) => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&q=${location}&aqi=no`
    );
    return response.data;
  }
);

const initialState = {
  activity: "",
  loading: false,
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(fetchWeather.fulfilled,(state,action)=>{
        state.loading = false;
        
    })
  },
});
