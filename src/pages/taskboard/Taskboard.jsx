import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const Taskboard = () => {
  return (
    <>
      <TaskInput />
      <TaskList />
    </>
  );
};

export default Taskboard;
