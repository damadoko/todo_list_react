import React from "react";
import classes from "./Task.module.css";

export default function Task(props) {
  const {
    delTaskHandler,
    title,
    dataId,
    updateTaskHandler,
    changeStatusHandler,
    status,
    filter
  } = props;
  const TaskStyle = [];

  // Filter
  if ((status && filter === "remain") || (!status && filter === "done")) {
    TaskStyle.push(classes.Hide);
  }

  // Done
  if (status) {
    TaskStyle.push(classes.Done);
  }

  return (
    <div className={TaskStyle.join(" ")}>
      <i className="fas fa-check" onClick={() => changeStatusHandler(dataId)} />
      <input
        type="text"
        onChange={e => updateTaskHandler(e, dataId)}
        value={title}
      ></input>
      <i className="fas fa-times" onClick={() => delTaskHandler(dataId)} />
    </div>
  );
}
