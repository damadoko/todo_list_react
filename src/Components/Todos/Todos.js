import React from "react";
import TaskList from "./TaskList/TaskList";
import AddTask from "./AddTask/AddTask";
import FilterTasks from "./filterTasks/FilterTasks";
import RecordTasks from "./RecordTasks/RecordTasks";

export default function Todos(props) {
  const {
    addTaskHandler,
    delTaskHandler,
    updateTaskHandler,
    delDoneTaskHandler,
    tasksArr,
    changeFilterHandler,
    changeStatusHandler,
    filter
  } = props;
  return (
    <div>
      <AddTask addTaskHandler={addTaskHandler} />
      <FilterTasks
        delDoneTaskHandler={delDoneTaskHandler}
        tasksArr={tasksArr}
        changeFilterHandler={changeFilterHandler}
      />
      <TaskList
        tasksArr={tasksArr}
        delTaskHandler={delTaskHandler}
        updateTaskHandler={updateTaskHandler}
        changeStatusHandler={changeStatusHandler}
        filter={filter}
      />
      <RecordTasks tasksArr={tasksArr} />
    </div>
  );
}
