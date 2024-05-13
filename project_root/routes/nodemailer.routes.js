const express = require('express');
const router = express.Router();
const forgotPasswordController = require('../controllers/nodemailer.js');

router.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  // Validate email
  // Call sendForgotPasswordEmail function from controller
  forgotPasswordController.sendForgotPasswordEmail(email);
  res.send('Forgot password email sent successfully.');
});

module.exports = router;
