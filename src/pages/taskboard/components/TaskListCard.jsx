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
import { useDispatch } from "react-redux";
import { toggleTask } from "../../../store/slices/TasksSlice";
import Weather from "./Weather";

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

const TaskListCard = ({ taskData }) => {
  const { id, completed, priority, category, date, title } = taskData;
  const [isChecked, setIsChecked] = useState(completed);
  const dispatch = useDispatch();

  return (
    <Card sx={{ borderRadius: 3, p: 2 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Box display="flex" alignItems="center" gap={1}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked);
                dispatch(toggleTask({ id, completed: e.target.checked }));
              }}
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

      {category === "Outdoor" ? <Weather /> : ""}
    </Card>
  );
};

export default TaskListCard;
