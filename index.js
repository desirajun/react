var React = require("react");
var ReactDOM = require("react-dom");

// render (WHAT TO SHOW, WHERE TO SHOW)
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

// This replaces the following pure JS code:
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// document.getElementById("root").appendChild(h1);
