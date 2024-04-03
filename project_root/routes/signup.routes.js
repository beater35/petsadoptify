const express = require("express");
const router = express.Router();
const { createSignup, updateSignup} = require('../controllers/signupuser.controller.js');
const User = require('../models/signup.js');

// Route for creating a new signup
router.post('/', createSignup);

// Route for updating signup details
router.put('/:email', updateSignup);

module.exports = router;
