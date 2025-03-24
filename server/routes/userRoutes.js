const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/Users');

const router = express.Router();

// POST route to register a new user
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, address, password } = req.body;

  try {
    // Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      address,
      password: hashedPassword
    });
    
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
