import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { WiDaySunny } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../../store/slices/ActivitySlice";

const Weather = () => {
  const dispatch = useDispatch();
  const { loading, error, info } = useSelector((state) => state.activity);
  

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    // First try Geolocation API
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (geoError) => {
          console.warn(
            "Geolocation denied. Falling back to IP-based location."
          );
          fetchIpLocation(); // Fallback to IP-based location
        }
      );
    } else {
      console.warn("Geolocation not supported. Using IP-based location.");
      fetchIpLocation();
    }

  }, []);

  useEffect(() => {
    dispatch(fetchWeather(`${location?.latitude},${location.longitude}`));
  }, [dispatch, location]);

  // Function to get location via IP
  const fetchIpLocation = () => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setLocation({
          latitude: data.latitude,
          longitude: data.longitude,
        });
      })
      .catch((e) => console.error("failed to fetch location"));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box sx={{ p: 2, mt: 2, borderRadius: 2, border: "1px solid #e0e0e0" }}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        Weather
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <img className="w-8" src={info.weather?.condition?.icon} alt="" />
        <Typography>
          {info.weather?.temp_c}°C, {info.weather?.condition?.text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Weather;
