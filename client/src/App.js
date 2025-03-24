import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login_Page from "./components/Login_Page";
import Dashboard from "./components/Dashboard";
import Sign_Up from "./components/Sign_Up"; // Import the sign-up page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login_Page />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Sign_Up />} />
        <Route path="/" element={<Login_Page />} />
      </Routes>
    </Router>
  );
};

export default App;
