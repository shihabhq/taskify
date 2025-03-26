import { Box, Fab, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { CgDanger } from "react-icons/cg";
import { IoWarningOutline } from "react-icons/io5";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import TaskCard from "./TaskListCard";
import { useSelector } from "react-redux";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div className="flex flex-col gap-4">{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <Box
      sx={{ height: "fit-content", padding: 3, borderRadius: 2, boxShadow: 1 }}
    >
      <Typography variant="h5" fontWeight={600} mb={1}>
        Task List
      </Typography>
      <Box>
        <div className="flex flex-col gap-4">
          {tasks.map((task) => {
            return <TaskCard taskData={task} key={task.id} />;
          })}
        </div>
      </Box>
    </Box>
  );
};

export default TaskList;
