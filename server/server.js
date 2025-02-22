const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import the DB connection function
const connectDB = require('./db');

const app = express();
app.use(express.json());
app.use(cors());

// Call the connectDB function to connect to MongoDB
connectDB();

// Define your routes here (optional, you can add more routes as needed)
app.get('/', (req, res) => res.send('Server is running'));

//Use userRoutes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Set the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
