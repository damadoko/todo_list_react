import React from "react";

export default function RecordTasks(props) {
  const { tasksArr } = props;
  const totalTasks = tasksArr.length;
  const doneTasks = tasksArr.filter(item => item.isDone).length;
  const remainTasks = tasksArr.filter(item => !item.isDone).length;

  return (
    <div>
      <h1>Total tasks: {totalTasks}</h1>
      <h1>Done tasks: {doneTasks}</h1>
      <h1>Remain tasks: {remainTasks}</h1>
    </div>
  );
}
