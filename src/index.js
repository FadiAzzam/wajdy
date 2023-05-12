import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.scss";
import App from "./App";

import "@fortawesome/fontawesome-free/css/all.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);