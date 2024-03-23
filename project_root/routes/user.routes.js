const express = require("express")
const User = require('../models/user.js');
const router = express.Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/user.controller.js')

// Get users
router.get('/', getUsers);

// Get user by email
router.get('/:email', getUser);

// Create user
router.post('/', createUser);

// Update user
router.put('/:email', updateUser);

// Delete user
router.delete("/:email", deleteUser);


module.exports = router;