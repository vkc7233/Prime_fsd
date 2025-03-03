import ReactDOM from "react-dom";
import React from "react"

const domroot=document.getElementById("parent")

const reactroot=ReactDOM.createRoot(domroot)

const title=<h1>Hello</h1>;

reactroot.render(title);