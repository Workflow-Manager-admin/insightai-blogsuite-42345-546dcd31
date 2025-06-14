import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// PUBLIC_INTERFACE
// Entry point for the React application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// To add global styles, import './index.css' here.
