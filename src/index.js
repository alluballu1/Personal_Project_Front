import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import stores from "./store";

ReactDOM.render(
  <BrowserRouter basename="/">
    <Provider store={stores.store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
