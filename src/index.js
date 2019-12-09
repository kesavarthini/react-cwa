import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "./component/app";
import { Provider } from "react-redux";
import store from "./store/index";
ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById("root")
);
