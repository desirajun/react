import React from "react";
import ReactDom from "react-dom";

// var React = require("react");
// var ReactDOM = require("react-dom");

// render (WHAT TO SHOW, WHERE TO SHOW)
ReactDom.render(<h1>Hello World!</h1>, document.getElementById("root"));

// This replaces the following pure JS code:
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// document.getElementById("root").appendChild(h1);

// To insert multiple elements within the same div
ReactDom.render(
  <div>
    <h1>Hello World Again!</h1>
    <p>This is a paragraph within the same div.</p>
  </div>,
  document.getElementById("root")
);
