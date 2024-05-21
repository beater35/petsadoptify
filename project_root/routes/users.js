const express = require('express');
const router = express.Router();

const users = []; // Example storage for users, replace with your database

// Register user
router.post('/', async (req, res) => {
  const { email, username, password, dob } = req.body;

  // Check if user already exists
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ error: 'Email already exists' });
  }

  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  // Create new user
  const newUser = { email, username, password, dob, verified: false };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully, please verify your email' });
});

module.exports = router;
