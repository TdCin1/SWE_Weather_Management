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
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #8b5cf6, #4f46e5)",
      padding: "1.5rem"
    }}>
      <div className="bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Welcome Back</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
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
            Login
          </button>
        </form>

        <p className="text-center text-white mt-4">
          Don't have an account?{" "}
          <button 
            onClick={() => navigate("/signup")}
            className="text-purple-300 font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
