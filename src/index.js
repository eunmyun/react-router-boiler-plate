import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import Routes from "./routes";

import "./index.css";

const outlet = document.getElementById("root");

const App = () => (
    <div>
        <Router history={browserHistory} routes={Routes} />
    </div>
)
ReactDOM.render(
    <App />, 
    outlet
);
