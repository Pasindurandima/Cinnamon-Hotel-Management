const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register Route
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;
  if (!firstName || !lastName || !email || !password || !phone) {
    return res.status(400).json({ message: 'All fields required' });
  }

  const newUser = new User({ firstName, lastName, email, password, phone });
  await newUser.save();

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// ✅ NEW: Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // ✅ In production you’d use JWT here!
  res.json({ message: 'Login successful', user: { email: user.email, firstName: user.firstName } });
});

module.exports = router;
