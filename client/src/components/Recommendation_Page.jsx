import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaPhoneAlt, FaLink, FaUserShield, FaPaw } from 'react-icons/fa';

const Recommendation_Page = () => {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100 bg-day" style={{ padding: '20px' }}>
      <style jsx>{`
        .bg-day {
          background: linear-gradient(135deg, #e0f7fa 0%, #80deea 50%, #4dd0e1 100%);
          background-attachment: fixed;
          background-size: cover;
          min-height: 100vh;
        }
        .card {
          background: rgba(255, 255, 255, 0.9);
          border: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
          margin-bottom: 20px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          padding: 20px;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.25);
        }
        h2, h3 {
          font-weight: 600;
          margin-bottom: 20px;
          text-align: center;
        }
        ul {
          list-style: none;
          padding-left: 0;
        }
        li {
          font-size: 1.1rem;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
        }
        li svg {
          margin-right: 10px;
          color: #4dd0e1;
          flex-shrink: 0;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .section {
          max-width: 700px;
          margin: 30px auto;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .section ul li strong {
          margin-right: 8px;
        }
        .contact-info-item {
          margin-bottom: 8px;
        }
        .nav-bottom {
          position: fixed;
          bottom: 0;
          width: 100%;
          padding: 15px 0;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
          max-width: 100%;
          display: flex;
          justify-content: center;
          gap: 15px;
          z-index: 1000;
        }
      `}</style>

      <div className="card animate__animated animate__fadeIn">
        <h2>Hurricane Safety Recommendations</h2>
        <ul>
          <li><FaCheckCircle /> Buy enough bottled water for everyone in your household (1 gallon per person per day).</li>
          <li><FaCheckCircle /> Prepare a kit with non-perishable food that lasts at least 3 days.</li>
          <li><FaCheckCircle /> Locate nearby shelters and know the routes to get there.</li>
          <li><FaCheckCircle /> Pack a basic emergency supply kit with flashlights, batteries, first aid, and medications.</li>
          <li><FaCheckCircle /> Keep your phone charged and get a backup power bank if possible.</li>
          <li><FaCheckCircle /> Gather and waterproof important documents (ID, insurance, medical info).</li>
          <li><FaCheckCircle /> Keep your car gas tank full in case you need to evacuate.</li>
          <li><FaCheckCircle /> Include pet supplies (food, water, crate, leash, etc.) in your kit.</li>
        </ul>
      </div>

      <div className="section">
        <h3><FaPhoneAlt className="me-2" /> Emergency Contact Information</h3>
        <ul>
          <li className="contact-info-item"><strong>National Weather Service:</strong> www.weather.gov</li>
          <li className="contact-info-item"><strong>Florida Division of Emergency Management:</strong> www.floridadisaster.org</li>
          <li className="contact-info-item"><strong>Local Police/Fire/EMS:</strong> 911</li>
        </ul>
      </div>

      <div className="section">
        <h3><FaLink className="me-2" /> Useful Resources</h3>
        <ul>
          <li><a href="https://www.floridadisaster.org/planprepare/florida-hurricane-guide/" target="_blank" rel="noopener noreferrer">Florida Hurricane Guide</a></li>
          <li><a href="https://www.floridadisaster.org/planprepare/shelters/" target="_blank" rel="noopener noreferrer">Shelter Locations in Florida</a></li>
          <li><a href="https://www.floridadisaster.org/planprepare/make-an-evacuation-plan/" target="_blank" rel="noopener noreferrer">Evacuation Plan</a></li>
          <li><a href="https://www.nhc.noaa.gov/" target="_blank" rel="noopener noreferrer">National Hurricane Center</a></li>
        </ul>
      </div>

      <div className="section">
        <h3><FaUserShield className="me-2" /> Tips for Special Groups</h3>
        <ul>
          <li><FaUserShield className="me-2" /> Elderly: Ensure you have medications, mobility aids, and a support network.</li>
          <li><FaUserShield className="me-2" /> Disabled: Prepare necessary medical equipment and arrange for assistance if needed.</li>
          <li><FaPaw className="me-2" /> Pet Owners: Have pet food, water, crates, and leashes ready for evacuation.</li>
        </ul>
      </div>

      <div className="nav-bottom">
        <button className="btn btn-info" onClick={() => navigate("/weather-map")}>
          Go to Weather Map
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/dashboard")}>
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default Recommendation_Page;
