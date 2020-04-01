import React from "react";
import Task from "./Task/Task";

export default function TaskList(props) {
  const {
    tasksArr,
    delTaskHandler,
    updateTaskHandler,
    filter,
    changeStatusHandler
  } = props;
  const titleList = tasksArr.map(item => (
    <Task
      title={item.title}
      key={item.id}
      dataId={item.id}
      delTaskHandler={delTaskHandler}
      updateTaskHandler={updateTaskHandler}
      changeStatusHandler={changeStatusHandler}
      status={item.isDone}
      filter={filter}
    />
  ));
  return <div>{titleList}</div>;
}
