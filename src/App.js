import "./App.css";
import React, { Component } from "react";
import TaskList from "./Components/TaskList";
import AddItems from "./Components/AddItems";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        { id: Math.random(), text: "task1" },
        { id: Math.random(), text: "task2" },
        { id: Math.random(), text: "task3" },
      ],
    };
  }
  addTask = (text) => {
    this.setState({
      taskList: [...this.state.taskList, { id: Math.random(), text: text }],
    });
  };
  deleteTask = (id) => {
    this.setState({
      taskList: this.state.taskList.filter((task) => task.id != id),
    });
  };
  render() {
    return (
      <div>
        <AddItems addTask={this.addTask} />
        <TaskList taskList={this.state.taskList} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
