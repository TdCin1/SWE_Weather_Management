import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Weather Dashboard</h1>
      <div className="row">
        <div className="col-md-4 bg-warning p-3 text-white">
          <h2>Sunny</h2>
          <p>75°F</p>
        </div>
        <div className="col-md-4 bg-secondary p-3 text-white">
          <h2>Cloudy</h2>
          <p>68°F</p>
        </div>
        <div className="col-md-4 bg-primary p-3 text-white">
          <h2>Rainy</h2>
          <p>60°F</p>
        </div>
      </div>
      <button className="btn btn-danger mt-3">Logout</button>
    </div>
  );
};

export default Dashboard;
