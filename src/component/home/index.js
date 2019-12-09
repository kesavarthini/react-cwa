import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import UserList from "../userlist";
import Stocks from "../Stocklist";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  handleAdd(n, i) {
    let arr = { name: n, id: i };
    this.state.users.push(arr);
    this.setState({ users: this.state.users });
  }
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/stocklist/" exact activeClassName="my-active">
                  Stocks
                </NavLink>
              </li>
              <li>
                <NavLink to="/userlist/" exact>
                  Users
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route
            path="/stocklist"
            component={() => (
              <UserList kind="stocks" handleAdd={this.handleAdd.bind(this)} />
            )}
          />
          <Route
            path="/userlist"
            component={() => (
              <UserList kind="users" handleAdd={this.handleAdd.bind(this)} />
            )}
          />

          <Redirect from="/" to="/userlist" />
        </Switch>
      </div>
    );
  }
}

export default Home;
