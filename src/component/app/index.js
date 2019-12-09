import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import CarComponent from "../car-component";
import Header from "../header";
import Footer from "../footer";
import TimerComponent from "../timer-component";
import Employee from "../employee";
import AddEmployee from "../add-employee";
import StockList from "../stocklist";
import UserList from "../userList";
import Hoc from "../HoC";
import Home from "../home";
const stocks = [
  {
    name: "TCS",
    id: 1
  },
  {
    name: "Infosys",
    id: 2
  },
  {
    name: "CTS",
    id: 3
  },
  {
    leftTitle: "Stock Name",
    rightTitle: "Stock Id"
  }
];
const users = [
  {
    id: 1,
    name: "Keshu"
  },
  {
    id: 2,
    name: "Neha"
  },
  {
    id: 3,
    name: "Saravanan"
  },
  {
    leftTitle: "User Name",
    rightTitle: "User Id"
  }
];
const Stocks = Hoc(StockList, stocks);
const Users = Hoc(StockList, users);
class AppComponent extends Component {
  constructor(props) {
    console.log("Parent Constructor");
    super(props);
    this.state = {
      header: "React Training",
      brand1: "Ford",
      model1: "Mustang",
      myFav: "Ford",
      brand2: "Hyundai",
      model2: "Verna",
      footer: "Welcome",
      buttonClickCount: 0,
      timer: 0
    };
    this.handleFavCar = selectedCar => {
      console.log("Inside Handle Fav");
      this.setState({ myFav: selectedCar });
    };
    this.handleButtonClick = () => {
      this.setState({
        buttonClickCount: this.state.buttonClickCount + 1
      });
    };
    this.handleTimeout = () => {
      this.setState({ timer: this.state.timer + 1 });
    };

    this.handleDelete = index => {
      let tempArray = this.state.employees;
      tempArray.splice(index, 1);
      this.setState({ employees: tempArray });
    };

    //this.handleFavCar=this.handleFavCar.bind
  }

  handleAdd(empName, empAge) {
    console.log(name);
    if (empName === "" || empAge === "") {
      alert("Enter valid details");
    } else {
      let arr = { name: empName, age: empAge };
      this.state.employees.push(arr);
      this.setState({ employees: this.state.employees });
    }
  }

  componentWillMount() {
    console.log("Inside Parent Will Mount");
  }

  componentWillUpdate(previousProp, nextProp) {
    console.log("Inside Parent Will Update");
  }
  componentWillReceiveProps() {
    console.log("Inside Parent Will Receive Props");
  }

  render() {
    console.log("Inside Parent Render");
    return (
      <BrowserRouter>
        <div className="root">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppComponent;
