import React, { Component } from "react";
import ReactDOM from "react-dom";
class CarComponent extends Component {
  constructor(props) {
    console.log("Child Constructor");
    super(props);
  }
  componentWillMount() {
    console.log("Inside Child Will Mount");
  }
  componentDidMount() {
    console.log("Inside Child Did Mount");
  }
  componentWillUpdate(previousProp, nextProp) {
    console.log("Inside Child Will Update");
  }
  componentWillReceiveProps() {
    console.log("Inside Child Will Receive Props");
  }

  render() {
    console.log("Inside Child render");
    debugger;
    return this.props.children;
  }
}
export default CarComponent;
