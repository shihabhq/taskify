import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  info: {
    weather: null,
    books: null,
    movies: null,
  },
};

//weather feching thunk
export const fetchWeather = createAsyncThunk(
  "activity/fetchWeather",
  async (location) => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=53790b942c254faea0852454252603&q=${location}&aqi=no`
    );
    return response.data;
  }
);

//books fetching thunk
export const fetchBooks = createAsyncThunk("activity/fetchBooks", async () => {
  const randIdx = Math.floor(Math.random() * 240);
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=love&startIndex=${randIdx}&maxResults=1`
  );
  return response.data;
});

//movies fetching thunk
export const fetchMovies = createAsyncThunk(
  "activity/fetchMovies",
  async () => {
    const response = await axios.get("https://jsonfakery.com/movies/random");
    return response.data;
  }
);

const activitySlice = createSlice({
  name: "activity",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.info.weather = action.payload.current;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch data";
      })
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.info.books = action.payload.items[0].volumeInfo;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to get data";
      })
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to get data";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.info.movies = {
          title: action.payload.original_title,
          vote: action.payload.vote_average,
        };
      });
  },
});

export default activitySlice.reducer;
