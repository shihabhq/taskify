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
  const [value, setValue] = React.useState(0);
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ height: "fit-content", padding: 3, borderRadius: 2, boxShadow: 1 }}
    >
      <Typography variant="h5" fontWeight={600} mb={1}>
        Task List
      </Typography>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All" {...a11yProps(0)} />
            <Tab
              label={
                <div className="flex items-center gap-1">
                  <IoWarningOutline color="red" /> Hard
                </div>
              }
              {...a11yProps(1)}
            />
            <Tab
              label={
                <div className="flex items-center gap-1">
                  <CgDanger color="orange" /> Medium
                </div>
              }
              {...a11yProps(2)}
            />
            <Tab
              label={
                <div className="flex items-center gap-1">
                  <IoCheckmarkDoneCircleOutline color="green" /> Low
                </div>
              }
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {tasks.map((task) => {
            return <TaskCard taskData={task} key={task.id} />;
          })}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          High
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Medium
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Low
        </CustomTabPanel>
        {/* <Typography
          variant="body1"
          className="text-gray-600"
          sx={{ fontWeight: 500 }}
        >
          No task added yet
        </Typography> */}
      </Box>
    </Box>
  );
};

export default TaskList;
