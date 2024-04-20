// controllers/authController.js

const nodemailer = require('nodemailer');

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Logic to send the forgot password email
    // Create a transport for sending emails (using nodemailer)
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      }
    });

    // Define the email options
    let mailOptions = {
      from: 'shristiprajapati339@gmail.com',
      to: email,
      subject: 'Forgot Password',
      text: 'You forgot your password.',
      html: '<p>You forgot your password.</p>', // HTML version of the email
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, message: 'Failed to send forgot password email' });
      } else {
        console.log('Email sent:', info.response);
        return res.status(200).json({ success: true, message: 'Forgot password email sent successfully' });
      }
    });
  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
