import React from "react";
import classes from "./Header.module.css";

export default function() {
  return (
    <div className={classes.Header}>
      <h1 className={classes.Brand}>Todo List</h1>
    </div>
  );
}
