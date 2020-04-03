import React from "react";
import classes from "./FilterTasks.module.css";

export default function FilterTasks(props) {
  const { delDoneTaskHandler, changeFilterHandler, tasksArr, filter } = props;

  const styleAllFilterBtn = [classes.FilterBtn];
  const styleDoneFilterBtn = [classes.FilterBtn];
  const styleRemainFilterBtn = [classes.FilterBtn];

  const disableBtnNoTask = (() => {
    if (tasksArr.length === 0) {
      styleAllFilterBtn.push(classes.Disabled);
      styleDoneFilterBtn.push(classes.Disabled);
      styleRemainFilterBtn.push(classes.Disabled);
      return true;
    } else {
      return false;
    }
  })();

  const identifyCurrentFilter = () => {
    if (filter === "all") {
      styleAllFilterBtn.push(classes.Current);
    } else if (filter === "done") {
      styleDoneFilterBtn.push(classes.Current);
    } else {
      styleRemainFilterBtn.push(classes.Current);
    }
  };
  identifyCurrentFilter();
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
          className={styleAllFilterBtn.join(" ")}
          type="button"
          onClick={() => changeFilterHandler("all")}
          disabled={disableBtnNoTask}
        >
          All
        </button>
        <button
          className={styleDoneFilterBtn.join(" ")}
          type="button"
          onClick={() => changeFilterHandler("done")}
          disabled={disableBtnNoTask}
        >
          Done
        </button>
        <button
          className={styleRemainFilterBtn.join(" ")}
          type="button"
          onClick={() => changeFilterHandler("remain")}
          disabled={disableBtnNoTask}
        >
          Remain
        </button>
      </div>
    </div>
  );
}
