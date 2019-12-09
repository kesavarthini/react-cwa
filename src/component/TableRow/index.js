import React, { Component } from "react";
import styled from "styled-components";
const Thead = styled.thead`
  color: red;
`;
class TableRow extends Component {
  render() {
    if (this.props.obj.leftTitle && this.props.obj.rightTitle) {
      return (
        <Thead>
          <tr>
            <td>{this.props.obj.leftTitle}</td>
            <td>{this.props.obj.rightTitle}</td>
          </tr>
        </Thead>
      );
    } else {
      return (
        <tr>
          <td>{this.props.obj.name}</td>
          <td>{this.props.obj.id}</td>
        </tr>
      );
    }
  }
}
export default TableRow;
