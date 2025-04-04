import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCog } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();
  const [zipCode, setZipCode] = useState("");
  const [county, setCounty] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSettingsSubmit = (e) => {
    e.preventDefault();
    //TODO
    //Landon... send the updated zip code and county to the backend
    //erase console.log replace with posts i think
    console.log("Updated Zip Code:", zipCode);
    console.log("Updated County:", county);
    setShowSettings(false);
  };

  const handleZipCodeChange = (e) => {
    const value = e.target.value;
    //Allow only numbers and limit to 5 digits
    if (/^\d{0,5}$/.test(value)) {
      setZipCode(value);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Weather Dashboard</h1>
      <button
        className="btn btn-light float-right"
        onClick={() => setShowSettings(!showSettings)}
      >
        <FaCog /> Settings
      </button>
      {showSettings && (
        <div className="settings-form mt-3">
          <form onSubmit={handleSettingsSubmit} className="text-left">
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                className="form-control mx-auto"
                id="zipCode"
                value={zipCode}
                onChange={handleZipCodeChange}
                required
                style={{ width: '200px' }} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="county">County</label>
              <input
                type="text"
                className="form-control mx-auto"
                id="county"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                required
                style={{ width: '200px' }} 
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Update</button>
          </form>
        </div>
      )}
      <div className="row mt-4">
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
      <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
