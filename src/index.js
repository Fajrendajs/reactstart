import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function calcTime(city, offset) {
  // create Date object for current location
  var d = new Date();

  // convert to msec
  // subtract local time zone offset
  // get UTC time in msec
  var utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  var nd = new Date(utc + 3600000 * offset);

  // return time as a string
  //return "The local time for city" + city + " is " + nd.toLocaleString();
  return nd.toLocaleString();
}

function Clock(props) {
  return (
    <div>
      <h1> Vrijeme {props.mjesto} </h1>
      <h2>Vrijeme {props.date}</h2>
    </div>
  );
}

function Cards() {
  return (
    <div>
      <Clock
        date={new Date().toLocaleString(
          "hr-HR",
          { timeZone: "Europe/Zagreb" }
        )}
        mjesto={"Zagreb"}
      />
      <Clock
        date={new Date().toLocaleString(
          "hr-HR",
          { timeZone: "Europe/Moscow" }
        )}
        mjesto={"Moskva"}
      />
      <Clock
        date={new Date().toLocaleString(
          "hr-HR",
          { timeZone: "Asia/Jakarta" }
        )}
        mjesto={"Bombay"}
      />
    </div>
  );
}

function tick() {
  ReactDOM.render(<Cards />, document.getElementById("root"));
}

setInterval(tick, 1000);

//alert(new Date().toLocaleString(  "de-DE",  { hour: "2-digit", hour12: false, timeZone: "Europe/Athens" }));

//  new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })

//  new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }).toLocaleDateString
