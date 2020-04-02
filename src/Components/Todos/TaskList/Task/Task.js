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
  const TaskStyle = [classes.Task];
  const TaskTimes = ["fas", "fa-times"];

  // Filter
  if ((status && filter === "remain") || (!status && filter === "done")) {
    TaskStyle.push(classes.Hide);
  }

  // Done
  if (status) {
    TaskStyle.push(classes.Done);
    TaskTimes.push(classes.Show);
  }

  return (
    <div className={TaskStyle.join(" ")}>
      <div className={classes.TaskWraper}>
        <i
          className="fas fa-check"
          onClick={() => changeStatusHandler(dataId)}
        />
        <input
          className={classes.TaskContent}
          type="text"
          onChange={e => updateTaskHandler(e, dataId)}
          value={title}
        />
      </div>
      <i
        className={TaskTimes.join(" ")}
        onClick={() => delTaskHandler(dataId)}
      />
    </div>
  );
}
