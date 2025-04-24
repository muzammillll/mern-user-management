import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use 'react-dom/client'
import App from "./App.jsx";
import "bulma/css/bulma.css"

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
