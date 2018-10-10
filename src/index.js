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
/*
function tick() {
  const time = (
    <div>
      <h1>hello, world</h1>
      <h2>It is {new Date().toLocaleTimeString()} </h2>
      <h2>It is {new Date().toLocaleDateString()} </h2>
    </div>
  );
  ReactDOM.render(time, rootElement);
}
setInterval(tick, 1000);
*/
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64"
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  rootElement
);

//setInterval(tick, 1000);
