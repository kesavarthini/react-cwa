import React, { Component } from "react";
import ReactDOM from "react-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <h1>Footer : {this.props.footer}</h1>
        <button onClick={this.props.handleButtonClick.bind(this)}>
          Click Me
        </button>
      </div>
    );
  }
}

export default Footer;
