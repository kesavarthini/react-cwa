import React, { Component } from "react";
import ReactDOM from "react-dom";
class Employee extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li>
          Name : {this.props.name} Age : {this.props.age}
        </li>
        <button onClick={this.props.handleDelete.bind(this, this.props.index)}>
          Delete
        </button>
      </div>
    );
  }
}
export default Employee;
