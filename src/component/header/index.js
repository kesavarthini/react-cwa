import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Title : {this.props.header}</h1>
      </div>
    );
  }
}

export default Header;
