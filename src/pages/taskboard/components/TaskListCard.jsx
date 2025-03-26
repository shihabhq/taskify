import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Chip,
  Box,
} from "@mui/material";
import { MdOutlineEdit, MdDelete, MdOutlineLocationOn } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { IoWarningOutline } from "react-icons/io5";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { WiDaySunny } from "react-icons/wi";
import { useDispatch } from "react-redux";

const priorityStyles = {
  low: {
    bg: "#024e02",
    color: "#00c853",
    icon: <IoCheckmarkDoneCircleOutline color="#00c853" />,
  },
  medium: {
    bg: "#6a4b02",
    color: "#e6a500",
    icon: <IoWarningOutline color="#e6a500" />,
  },
  hard: {
    bg: "#500202",
    color: "#d32f2f",
    icon: <CgDanger color="#d32f2f" />,
  },
};

const TaskCard = ({ taskData }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { id, priority, category, date, title } = taskData;


  return (
    <Card sx={{ borderRadius: 3, p: 2 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Box display="flex" alignItems="center" gap={1}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              style={{ transform: "scale(1.2)" }}
            />
            <Typography
              variant="h6"
              sx={{
                textDecoration: isChecked ? "line-through" : "none",
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Chip
              label={priority}
              icon={priorityStyles[priority]?.icon}
              sx={{
                backgroundColor: priorityStyles[priority]?.bg,
                color: priorityStyles[priority]?.color,
                fontWeight: "bold",
                borderRadius: 1,
                height: 24,
              }}
            />
            <Chip
              label={category}
              sx={{
                backgroundColor: "#1c2c4a",
                color: "#4d9dfd",
                fontWeight: "bold",
                borderRadius: 1,
                height: 24,
              }}
            />
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              {date}
            </Typography>
          </Box>
        </Box>

        {/* Actions */}
        <Box>
          <IconButton sx={{ color: "#000" }}>
            <MdOutlineEdit />
          </IconButton>
          <IconButton sx={{ color: "#ff0041" }}>
            <MdDelete />
          </IconButton>
        </Box>
      </Box>

      {/* Weather Info */}
      <Box sx={{ p: 2, mt: 2, borderRadius: 2, border: "1px solid #e0e0e0" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Weather in dhaka
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <WiDaySunny style={{ color: "#ffcc00", fontSize: "1.5rem" }} />
          <Typography>15°C, Partly Cloudy</Typography>
        </Box>
        <Typography variant="body2" sx={{ color: "#4d9dfd" }}>
          Great weather for your outdoor activity!
        </Typography>
      </Box>
    </Card>
  );
};

export default TaskCard;
