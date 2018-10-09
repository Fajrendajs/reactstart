import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function formatname(user) {
  return user.firstName + "  " + user.lastName;
}

const user = {
  firstName: "Ural",
  lastName: "test"
};
const name = " Sahalin";
const element = <h1>Hello, {formatname(user)}</h1>;

const rootElement = document.getElementById("root");
ReactDOM.render(element, rootElement);
