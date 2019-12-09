import React, { Component } from "react";
import ReactDOM from "react-dom";
import TableRow from "../TableRow";
import { connect } from "react-redux";
import { fetchData, addData } from "../../actions/index";
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: ""
    };
  }
  componentDidMount() {
    this.props.fetchRecords();
  }
  tabRow() {
    return (
      this.props.users &&
      this.props.users.map(function(user, i) {
        return <TableRow obj={user} key={i} />;
      })
    );
  }
  handleChange(event) {
    if (event.target.name === "name") {
      this.setState({ name: event.target.value });
    } else {
      this.setState({ id: event.target.value });
    }
  }
  render() {
    return (
      <div>
        <table>{this.tabRow()}</table>
        Name
        <input
          type="text"
          name="name"
          onChange={this.handleChange.bind(this)}
        ></input>
        Id{" "}
        <input
          type="text"
          name="id"
          onChange={this.handleChange.bind(this)}
        ></input>
        <button
          onClick={this.props.handleAdd.bind(
            this,
            this.state.name,
            this.state.id
          )}
        >
          Add
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { users: state.users };
};
const mapDispatchToProps = dispatch => {
  debugger;
  return {
    fetchRecords: () => {
      debugger;
      return dispatch(fetchData());
    },
    AddRecords: () => {
      return dispatch(addData());
    }
  };
};
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  debugger;
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(UserList);
