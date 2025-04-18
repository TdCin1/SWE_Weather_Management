import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login_Page from "./components/Login_Page";
import Dashboard from "./components/Dashboard";
import Sign_Up from "./components/Sign_Up";
import WeatherMap from "./components/Weather_Map";  // Import WeatherMap component
import Recommendation_Page from "./components/Recommendation_Page"; // Import recommendation page 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login_Page />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Sign_Up />} />
        <Route path="/weather-map" element={<WeatherMap />} />
        <Route path="/recommendation" element={<Recommendation_Page />} />
        <Route path="/" element={<Login_Page />} />
      </Routes>
    </Router>
  );
};

export default App;
