import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Render aplikasi React ke dalam elemen dengan id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

