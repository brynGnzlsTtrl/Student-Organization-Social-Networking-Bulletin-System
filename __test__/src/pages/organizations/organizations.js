import React from "react";
import ReactDOM  from "react-dom/client";

//main jsx
import  Organizations from "./Organizations.jsx";
import "./organizations.scss"

//achor js to html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Organizations/>)