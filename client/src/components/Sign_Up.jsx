import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaUser, FaHome, FaLock } from "react-icons/fa";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState(""); // Added password field
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        email,
        firstName,
        lastName,
        address,
        password, // Send password to the backend
      });

      navigate("/dashboard"); // Redirect to dashboard after successful signup
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create account. Please try again.");
    }
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #8b5cf6, #4f46e5)",
      padding: "1.5rem"
    }}>
      <div className="bg-white bg-opacity-50 backdrop-blur-lg p-6 rounded-4 shadow-lg w-100" style={{ maxWidth: '450px' }}>
        <h2 className="text-3xl font-bold text-center text-white mb-6">Create an Account</h2>

        {error && <p className="text-danger text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4 position-relative">
            <FaEnvelope className="position-absolute top-50 translate-middle-y text-muted" style={{ left: '12px' }} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control ps-5 py-3 border-2 border-purple-500 rounded-3 bg-white bg-opacity-75 text-dark shadow-sm focus:ring-2 focus:ring-purple-500"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-4 position-relative">
            <FaUser className="position-absolute top-50 translate-middle-y text-muted" style={{ left: '12px' }} />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control ps-5 py-3 border-2 border-purple-500 rounded-3 bg-white bg-opacity-75 text-dark shadow-sm focus:ring-2 focus:ring-purple-500"
              placeholder="First Name"
              required
            />
          </div>

          <div className="mb-4 position-relative">
            <FaUser className="position-absolute top-50 translate-middle-y text-muted" style={{ left: '12px' }} />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control ps-5 py-3 border-2 border-purple-500 rounded-3 bg-white bg-opacity-75 text-dark shadow-sm focus:ring-2 focus:ring-purple-500"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="mb-4 position-relative">
            <FaHome className="position-absolute top-50 translate-middle-y text-muted" style={{ left: '12px' }} />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control ps-5 py-3 border-2 border-purple-500 rounded-3 bg-white bg-opacity-75 text-dark shadow-sm focus:ring-2 focus:ring-purple-500"
              placeholder="Address"
              required
            />
          </div>

          <div className="mb-4 position-relative">
            <FaLock className="position-absolute top-50 translate-middle-y text-muted" style={{ left: '12px' }} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control ps-5 py-3 border-2 border-purple-500 rounded-3 bg-white bg-opacity-75 text-dark shadow-sm focus:ring-2 focus:ring-purple-500"
              placeholder="Password"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-100 btn btn-purple py-3 rounded-3 font-semibold shadow-md hover:bg-purple-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <button 
            onClick={() => navigate("/login")}
            className="btn btn-link text-purple-300 font-semibold hover:underline"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
