import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard"); // Redirect to the dashboard after login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #8b5cf6, #4f46e5)",
      padding: "1.5rem",
      flexDirection: "column"
    }}>
      <img src="/WeatherLogo.png" alt="Logo" style={{ display: 'block', margin: '0 auto 20px auto', height: '300px' }} />
      <h1 className="text-4xl font-extrabold text-center text-black mb-28">Sunshine Storm Tracker</h1>
      <div className="bg-white bg-opacity-50 backdrop-blur-lg p-6 rounded-4 shadow-lg w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-3xl font-bold text-center text-white mb-4">Welcome Back</h2>

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
            Login
          </button>
        </form>

        <p className="text-center text-white mt-4">
          Don't have an account?{" "}
          <button 
            onClick={() => navigate("/signup")}
            className="btn btn-link text-purple-300 font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
