import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
  </React.StrictMode>
);

reportWebVitals();
