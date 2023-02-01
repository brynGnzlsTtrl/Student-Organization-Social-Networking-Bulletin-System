import React from "react";
import ReactDOM from "react-dom/client";

//main jsx
import EventProposal from "./EventsProposal.jsx";
import "./eventsProposal.scss";


//achor js to html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EventProposal />);