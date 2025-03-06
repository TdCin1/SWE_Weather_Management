import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login_Page from "./components/Login_Page";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login_Page />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
