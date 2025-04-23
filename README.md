🌦️ SWE Weather Management
A full-stack weather management dashboard built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to view and manage weather data for different locations.

📦 Project Structure
bash
Copy
Edit
SWE_Weather_Management/
├── client/    # React frontend
├── server/    # Node.js + Express backend
├── .gitignore
└── README.md
🚀 Setup Instructions
Clone this repository:

bash
Copy
Edit
git clone https://github.com/TdCin1/SWE_Weather_Management.git
cd SWE_Weather_Management
Install dependencies for both client and server:

bash
Copy
Edit
cd server
npm install
cd ../client
npm install
Create a .env file in the server/ directory for your environment variables (e.g. API keys, database URI).

Run both the server and client:

In one terminal, run:

bash
Copy
Edit
cd server
npm start
In another terminal, run:

bash
Copy
Edit
cd client
npm start
🛠️ Technologies Used
MongoDB – NoSQL database for storing location and weather data.

Express.js – Backend web framework.

React – Frontend library for building the user interface.

Node.js – JavaScript runtime for backend development.

📌 Features
Display current weather data for selected cities.

Manage (add/delete) locations.

Clean React UI integrated with live backend APIs.

Environment configuration using .env files.
