const mongoose = require("mongoose");

// Define a Mongoose schema for the user model
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
	{ collection: "users" } // Specify the collection name in MongoDB
);

// Create a Mongoose model based on the schema
const User = mongoose.model("User", userSchema);


// Export the User model to use it in other parts of your application
module.exports = User;
