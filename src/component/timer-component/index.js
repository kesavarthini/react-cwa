import React, { Component } from "react";
import ReactDOM from "react-dom";
class TimerComponent extends Component {
  constructor(props) {
    console.log("Child Constructor");
    super(props);
  }
  componentDidMount() {
    setInterval(this.props.handleTimeout.bind(this), 5000);
  }
  render() {
    console.log("Inside Child render");
    return (
      <div>
        <h1>Timer Component : {this.props.timer}</h1>
      </div>
    );
  }
}
export default TimerComponent;
