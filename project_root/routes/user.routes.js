const express = require("express");
const bcrypt = require('bcrypt');
const User = require('../models/user.js');
const Signup = require('../models/signup.js');
const { getUsers, getUser, createUser, updateUser, deleteUser, deleteAll, getUser_username } = require('../controllers/user.controller.js');
const { createSignup, updateSignup} = require('../controllers/signupuser.controller.js');

const router = express.Router();

// Get all users
router.get('/', getUsers);

// Get user by email
router.get('/:email', getUser);

// Create a new user
router.post('/', createUser);

// Update user by email
router.patch('/:email', updateUser);

// Delete user by email
router.delete("/:email", deleteUser);

// Get user's username by email
router.get('/:email', getUser_username);


// Delete all users
// router.delete("/", deleteAll)

module.exports = router;
