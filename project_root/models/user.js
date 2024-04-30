const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  email: {
      type: String,
      required: true,
      unique: true
  },
  username: {
      type: String,
      required: true
  },
  dob: {
      type: Date,
  },
  password: {
      type: String,
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
