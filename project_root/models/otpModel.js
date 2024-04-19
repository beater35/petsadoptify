// models/otpModel.js
const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');
const Signup = require('signup.js'); // Import the Signup model

// Define the schema for OTP document
const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
  },
});

// Define a function to generate a random OTP
function generateOTP() {
  // Logic to generate a random OTP
  const otpLength = 6;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  return otp;
}

// Define a function to send emails
async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email",
      `<h1>Please confirm your OTP</h1>
       <p>Here is your OTP code: ${otp}</p>`
    );
    console.log("Email sent successfully: ", mailResponse);
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}

// Pre-save hook to send verification email and save OTP to the database
otpSchema.pre("save", async function (next) {
  console.log("New OTP document saved to the database");
  // Only send an email when a new document is created
  if (this.isNew) {
    // Generate OTP
    this.otp = generateOTP();
    // Send verification email
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

// Create and export the OTP model
module.exports = mongoose.model("OTP", otpSchema);
