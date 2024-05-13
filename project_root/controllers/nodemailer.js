require('dotenv').config();

// Import Nodemailer
const nodemailer = require('nodemailer');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Function to send forgot password email
const sendForgotPasswordEmail = (email) => {
  // Define email options
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: email,
    subject: 'Password Reset',
    html: `
      <p>Hello,</p>
      <p>Please click the following link to reset your password:</p>
      <a href="http://localhost:3000/api/forgot-password.html?email=${email}">Reset Password</a>
      <p>If you did not request a password reset, please ignore this email.</p>
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = {
  sendForgotPasswordEmail
};
