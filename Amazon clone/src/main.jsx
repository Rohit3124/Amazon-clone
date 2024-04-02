import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./components/HomePage/NavBar/navbar.css";
import "./components/HomePage/categories/categories.css";
import "./components/HomePage/Carousal/carousal.css";
import "./components/HomePage/Cards/card.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
