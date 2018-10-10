import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function tick() {
  const time = (
    <div>
      <h1>Vrijeme ZG</h1>
      <h2>It is {new Date().toLocaleTimeString()} </h2>
      <h2>It is {new Date().toLocaleDateString()} </h2>
    </div>
  );

  ReactDOM.render(time, document.getElementById("root"));
}

setInterval(tick, 1000);
