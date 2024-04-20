// routes/otpRoutes.js
const express = require('express');
const otpController = require('../controllers/otpController'); // Import the controller
const router = express.Router();

// Define route to handle sending OTP
router.post('/send-otp', otpController.sendOTP);

module.exports = router;
