const express = require('express');
const router = express.Router();
const forgotPasswordController = require('../controllers/nodemailer.js');

router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body; // Extract email from request body
    if (!email) {
      return res.status(400).send('Email address is required.'); // Return error if email is missing
    }
    // Call sendForgotPasswordEmail function from controller
    await forgotPasswordController.sendForgotPasswordEmail(email);
    return res.status(200).send('Forgot password email sent successfully.');
  } catch (error) {
    console.error('Error sending forgot password email:', error);
    res.status(500).send('Internal server error.');
  }
});

module.exports = router;
