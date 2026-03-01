import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/App.css";
import "./styles/nav.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="app-wrapper">
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
    </div>
);