import React, { Component } from "react";
class AddItems extends Component {
  state = { text: "" };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleAdd = () => {
    this.props.addTask(this.state.text);
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default AddItems;
