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
      <div className="bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Create an Account</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-4 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 p-3 border rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Email"
              required
            />
          </div>

          <div className="relative">
            <FaUser className="absolute left-3 top-4 text-gray-500" />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full pl-10 p-3 border rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="First Name"
              required
            />
          </div>

          <div className="relative">
            <FaUser className="absolute left-3 top-4 text-gray-500" />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full pl-10 p-3 border rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="relative">
            <FaHome className="absolute left-3 top-4 text-gray-500" />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full pl-10 p-3 border rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Address"
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-4 text-gray-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 p-3 border rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Password"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-300 shadow-md"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-white mt-4">
          Already have an account? {" "}
          <button 
            onClick={() => navigate("/login")}
            className="text-purple-300 font-semibold hover:underline"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
