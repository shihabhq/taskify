import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../store/slices/ActivitySlice";
import { Box, Typography } from "@mui/material";

const Books = () => {
  const { loading, error, info } = useSelector((state) => state.activity);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(fetchBooks());
  }, [disptach]);


  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box sx={{ p: 2, mt: 2, borderRadius: 2, border: "1px solid #e0e0e0" }}>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        Book recommendation
      </Typography>
      <Box display="flex flex-col" alignItems="center" gap={1}>
        
        <Typography>
          {info.books?.title}
        </Typography>
        <a href={info.books?.infoLink} className="hover:underline">Click to read</a>
      </Box>
    </Box>
  );
};

export default Books;
