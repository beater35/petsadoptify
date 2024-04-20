// signup.js
const mongoose = require('mongoose');


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

// Create and export the User model
module.exports = mongoose.model('Signup', userSchema);
