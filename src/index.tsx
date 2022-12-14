import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import NewProject from "./components/NewProject";
import EditProject from "./components/EditProject";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newproject" element={<NewProject />} />
        <Route path="/editproject" element={<EditProject />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
