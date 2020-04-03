import React, { Component, Fragment } from "react";
import Todos from "../Components/Todos/Todos";
import Header from "../Components/LayOut/Header/Header";
import DataMockUp from "./_DataMockup";

const getInitData =
  JSON.parse(localStorage.getItem("DATA_LOCAL")) || DataMockUp;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitData;
  }

  componentDidMount() {
    const initData = { ...this.state };
    localStorage.setItem("DATA_LOCAL", JSON.stringify(initData));
  }

  // Add Task
  addTaskHandler = (task, e) => {
    // console.log(task);
    if (task.length > 0) {
      let newID;
      const data = { ...this.state };

      data.taskItems.length === 0
        ? (newID = 0)
        : (newID = data.taskItems[data.taskItems.length - 1].id + 1);

      const newTask = {
        id: newID,
        title: task,
        isDone: false
      };

      data.taskItems.push(newTask);

      this.setState(data);
      localStorage.setItem("DATA_LOCAL", JSON.stringify(data));
      // Clear input field
      e.target.parentNode.children[0].value = " ";
    } else {
      // Alert user to input text
      e.target.parentNode.children[0].placeholder = "Please input your task!";
    }
  };
  // Delete single Task
  delTaskHandler = delID => {
    const data = { ...this.state };
    const delItemIndex = data.taskItems.map(item => item.id).indexOf(delID);
    data.taskItems.splice(delItemIndex, 1);

    this.setState(data);
    localStorage.setItem("DATA_LOCAL", JSON.stringify(data));
  };

  // Delete done Tasks
  delDoneTaskHandler = () => {
    let data = { ...this.state };
    data.taskItems = data.taskItems.filter(item => !item.isDone);

    this.setState(data);
    localStorage.setItem("DATA_LOCAL", JSON.stringify(data));
  };

  // Update Task
  updateTaskHandler = (e, updateID) => {
    // console.log("update!");
    const data = { ...this.state };
    const updateItemIndex = data.taskItems
      .map(item => item.id)
      .indexOf(updateID);
    const updateItem = data.taskItems[updateItemIndex];
    if (!updateItem.isDone) {
      updateItem.title = e.target.value;
    }

    this.setState(data);
    localStorage.setItem("DATA_LOCAL", JSON.stringify(data));
  };

  // Change filter
  changeFilterHandler = filter => {
    // console.log("clicked!");
    const data = { ...this.state };
    data.filter = filter;
    this.setState(data);
    localStorage.setItem("DATA_LOCAL", JSON.stringify(data));
  };

  // Change status
  changeStatusHandler = statusID => {
    const data = { ...this.state };
    const taskIndex = data.taskItems.map(item => item.id).indexOf(statusID);
    const curStatus = data.taskItems[taskIndex].isDone;
    data.taskItems[taskIndex].isDone = !curStatus;
    this.setState(data);
    localStorage.setItem("DATA_LOCAL", JSON.stringify(data));
  };

  render() {
    console.log("rendering");
    const { taskItems, filter } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Todos
            tasksArr={taskItems}
            addTaskHandler={this.addTaskHandler}
            delTaskHandler={this.delTaskHandler}
            updateTaskHandler={this.updateTaskHandler}
            delDoneTaskHandler={this.delDoneTaskHandler}
            changeFilterHandler={this.changeFilterHandler}
            changeStatusHandler={this.changeStatusHandler}
            filter={filter}
          />
        </div>
      </Fragment>
    );
  }
}
