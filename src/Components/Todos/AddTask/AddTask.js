import React from "react";

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
    <div>
      <input type="text" onChange={getInputString} onKeyDown={handleKeyDown} />
      <button type="button" onClick={e => addTaskHandler(inputString, e)} />
    </div>
  );
}
