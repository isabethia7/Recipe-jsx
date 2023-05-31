import React from "react";
import { render } from "react-dom";
//import { createRoot } from "react-dom/client";
import { default as Menu } from "./components/Menu.js";
import data from "./components/data/recipes.json";

//const domNode = document.getElementById('root');
//const root = createRoot(domNode);
//root.render(<Menu recipes={data} />);

render(<Menu recipes={data} />, document.getElementById("root"));
