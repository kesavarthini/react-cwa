import React, { Component } from "react";
import ReactDOM from "react-dom";
import TableRow from "../TableRow";
import styled from "styled-components";
const Thead = styled.thead`
  color: red;
`;
class StockList extends Component {
  constructor(props) {
    super(props);
  }

  tabRow() {
    return this.props.data.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <table>{this.tabRow()}</table> Name:{" "}
        <input
          type="text"
          name="name"
          onChange={this.handleChange.bind(this)}
        ></input>
        <button onClick={this.handleAdd.bind(this, this.state.name)}>
          Add
        </button>
      </div>
    );
  }
}
export default StockList;
