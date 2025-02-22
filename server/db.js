const mongoose = require('mongoose');
require('dotenv').config(); // Make sure you load the .env file

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
