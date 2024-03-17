const User = require('../models/User');

// Signup controller function
exports.signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).send('Username already exists');
    }
    // Create new user
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

// Login controller function
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if user exists and password matches
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).send('Login successful!');
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};
