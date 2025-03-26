import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { WiDaySunny } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../../store/slices/ActivitySlice";

const Weather = () => {
  const dispatch = useDispatch();
  const { loading, error, info } = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(fetchWeather("dhaka"));
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box sx={{ p: 2, mt: 2, borderRadius: 2, border: "1px solid #e0e0e0" }}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        Weather in dhaka
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <WiDaySunny style={{ color: "#ffcc00", fontSize: "1.5rem" }} />
        <Typography>15°C, Partly Cloudy</Typography>
      </Box>
    </Box>
  );
};

export default Weather;
