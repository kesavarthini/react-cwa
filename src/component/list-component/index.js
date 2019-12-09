import React, { Component } from "react";
import ReactDOM from "react-dom";

class ListComponent extends Component {
  render() {
    return (
      <div>
        <h1>List of Flavors</h1>
        {this.props.list.map(flavor => (
          <li>{flavor}</li>
        ))}
      </div>
    );
  }
}

export default ListComponent;
