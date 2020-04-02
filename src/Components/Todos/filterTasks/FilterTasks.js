import React from "react";
import classes from "./FilterTasks.module.css";

export default function FilterTasks(props) {
  const { delDoneTaskHandler, changeFilterHandler } = props;

  return (
    <div className={classes.Filter}>
      <button
        className={classes.Clear}
        type="button"
        onClick={delDoneTaskHandler}
      >
        Clear Done Tasks
      </button>
      <div>
        <label>Filter by:</label>
        <button
          className={classes.FilterBtn}
          type="button"
          onClick={() => changeFilterHandler("all")}
        >
          All
        </button>
        <button
          className={classes.FilterBtn}
          type="button"
          onClick={() => changeFilterHandler("done")}
        >
          Done
        </button>
        <button
          className={classes.FilterBtn}
          type="button"
          onClick={() => changeFilterHandler("remain")}
        >
          Remain
        </button>
      </div>
    </div>
  );
}
