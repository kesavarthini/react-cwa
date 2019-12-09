import React, { Component } from "react";
import ReactDOM from "react-dom";
class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: ""
    };
  }
  handleChange(event) {
    if (event.target.name === "name") {
      this.setState({ name: event.target.value });
    } else {
      this.setState({ age: event.target.value });
    }
  }
  render() {
    return (
      <div>
        Name:{" "}
        <input
          type="text"
          name="name"
          onChange={this.handleChange.bind(this)}
        ></input>
        Age:{" "}
        <input
          type="text"
          name="age"
          onChange={this.handleChange.bind(this)}
        ></input>
        <button
          onClick={this.props.handleAdd.bind(
            this,
            this.state.name,
            this.state.age
          )}
        >
          Add Employee
        </button>
      </div>
    );
  }
}
export default AddEmployee;
