# 🌦️ SWE Weather Management
A full-stack weather management dashboard built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to view and manage weather data for different locations.

# 📦 Project Structure
SWE_Weather_Management/client/    # React frontend /server/    # Node.js + Express backend

# 🚀 Setup Instructions
Clone this repository:

git clone https://github.com/TdCin1/SWE_Weather_Management.git
cd SWE_Weather_Management
Install dependencies for both client and server:

cd server
npm install
cd ../client
npm install

Create a .env file in the server/ directory for your environment variables (e.g. API keys, database URI).

Run both the server (make sure you are connected to MongoDB with IP) and client:

In one terminal, run:

cd server
npm start

In another terminal, run:

cd client
npm start

# 🛠️ Technologies Used
MongoDB – NoSQL database for storing location and weather data.

Express.js – Backend web framework.

React – Frontend library for building the user interface.

Node.js – JavaScript runtime for backend development.

# 📌 Features
Display current weather data for selected cities.

Manage (add/delete) locations.

Clean React UI integrated with live backend APIs.

Environment configuration using .env files.
