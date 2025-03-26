import React, { useEffect } from "react";

import { fetchMovies } from "../../../store/slices/ActivitySlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

const Movies = () => {
  const { loading, error, info } = useSelector((state) => state.activity);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(fetchMovies());
  }, [disptach]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box sx={{ p: 2, mt: 2, borderRadius: 2, border: "1px solid #e0e0e0" }}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        Movie recommendation
      </Typography>
      <Box display="flex flex-col" alignItems="center" gap={1}>
        <Typography variant="body1">{info.movies?.title}</Typography>
        <Typography variant="body1">
          {" "}
          Rating: {info.movies?.vote}/10{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Movies;
