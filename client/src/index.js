import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./Fonts/fgwo____.woff"
import "./Fonts/FRANKGO.woff"
import "./Fonts/FranklinGothicCondensed.woff";
import "./Fonts/FranklinGothic.woff";
import "./Fonts/FranklinGothicITALIC.woff";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
