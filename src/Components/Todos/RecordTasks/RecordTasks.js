import React from "react";
import classes from "./RecordTasks.module.css";

export default function RecordTasks(props) {
  const { tasksArr } = props;

  const totalTasks = tasksArr.length;
  const doneTasks = tasksArr.filter(item => item.isDone).length;
  const remainTasks = tasksArr.filter(item => !item.isDone).length;

  return (
    <div className={classes.Records}>
      <div className={classes.Wrapper}>
        <div className={classes.Record}>
          <p className={classes.Num}>{totalTasks}</p>
          <p>Total tasks</p>
        </div>
        <div className={classes.Record}>
          <p className={classes.Num}>{doneTasks}</p>
          <p>Done tasks</p>
        </div>
        <div className={classes.Record}>
          <p className={classes.Num}>{remainTasks}</p>
          <p>Remain tasks</p>
        </div>
      </div>
    </div>
  );
}
