import React from "react";

export default function FilterTasks(props) {
  const { delDoneTaskHandler, changeFilterHandler } = props;

  return (
    <div>
      <button type="button" onClick={delDoneTaskHandler}>
        Clear Done Tasks
      </button>
      <label>Filter by:</label>
      <button type="button" onClick={() => changeFilterHandler("all")}>
        All
      </button>
      <button type="button" onClick={() => changeFilterHandler("done")}>
        Done
      </button>
      <button type="button" onClick={() => changeFilterHandler("remain")}>
        Remain
      </button>
    </div>
  );
}
