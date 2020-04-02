import React from "react";
import classes from "./AddTask.module.css";

export default function AddTask(props) {
  const { addTaskHandler } = props;
  let inputString = "";
  const getInputString = e => {
    inputString = e.target.value;
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      addTaskHandler(inputString, e);
    }
  };

  // const clearInput = e => {
  //   e.target.value = "";
  // };
  return (
    <div className={classes.AddTask}>
      <input
        className={classes.Input}
        type="text"
        onChange={getInputString}
        onKeyDown={handleKeyDown}
      />
      <button
        className={classes.Add}
        type="button"
        onClick={e => addTaskHandler(inputString, e)}
      />
    </div>
  );
}
