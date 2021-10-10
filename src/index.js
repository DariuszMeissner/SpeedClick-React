import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/_main.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);

