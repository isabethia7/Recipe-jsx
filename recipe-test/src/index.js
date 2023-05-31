import React from "react";
import render from "react-dom";
import Menu from "./components/Menu.js";
import data from "./components/data/recipes.json";

render(<Menu recipes={data} />, document.getElementById("root"));
