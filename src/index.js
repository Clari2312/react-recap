import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

// const paragraph = React.createElement("p", null, "Hello!!");
// const title = React.createElement("h1", null, "Hello World!!");

// const total = React.createElement("div", null, [title, paragraph]);

// // ReactDOM.render(<elemento da inserire>, <elemento di destinazione>)
// ReactDOM.render(
//   // <React.StrictMode>
//   [
//     React.createElement("h1", null, "Hello World!!"),
//     React.createElement("p", null, [
//       "Hello!!",
//       React.createElement("br", null, null),
//       React.createElement("button", null, "Click Me"),
//     ]),
//   ],
//   // </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
