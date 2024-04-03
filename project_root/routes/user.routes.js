const express = require("express");
const bcrypt = require('bcrypt');
const User = require('../models/user.js');
const Signup = require('../models/signup.js'); // Import the Signup model
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller.js');
const { createSignup, updateSignup} = require('../controllers/signupuser.controller.js');

const router = express.Router();

// Get all users
router.get('/', getUsers);

// Get user by email
router.get('/:email', getUser);

// Create a new user
router.post('/', createUser);

// Update user by email
router.put('/:email', updateUser);

// Delete user by email
router.delete("/:email", deleteUser);

// User authentication (Login)
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email in the signups database
        const signupUser = await Signup.findOne({ email });

        // If user not found in signups database, respond with error and alert message
        if (!signupUser) {
            return res.status(401).json({ message: 'User not found' });
        }

        // Compare password with hashed password
        const isPasswordValid = await bcrypt.compare(password, signupUser.password);

        // If passwords don't match, respond with error
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // If email and password are correct, proceed with inserting data into the main database
        const newUser = new User({
            email: signupUser.email,
            username: signupUser.username,
            dob: signupUser.dob,
            password: signupUser.password // You may want to hash the password here if it's not already hashed in the signups database
        });

        // Save user to the main database
        const savedUser = await newUser.save();

        // Respond with success message and user data
        res.status(200).json({ message: 'Login successful', user: savedUser });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
