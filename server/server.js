const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB()
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Default route
app.get('/', (req, res) => res.send('Server is running'));

// Import Routes
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/auth'); // Add authentication routes

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes); // Now using auth routes

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Set the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
