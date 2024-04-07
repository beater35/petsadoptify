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
      required: true
  },
  password: {
      type: String,
      required: true
  }
});

// Create a Mongoose model based on the schema
const User = mongoose.model("User", userSchema);


// Export the User model to use it in other parts of your application
module.exports = User;
