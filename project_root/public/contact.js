// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define schema and model for contact info
const contactSchema = new mongoose.Schema({
    name: String,
    address: String,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Route to handle form submission
app.post('/contact', (req, res) => {
    const { name, address, email, message } = req.body;
    const newContact = new Contact({ name, address, email, message });
    newContact.save()
        .then(() => res.status(201).json({ message: 'Contact information saved successfully' }))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Route to fetch contact info for admin dashboard
app.get('/contacts', (req, res) => {
    Contact.find()
        .then(contacts => res.status(200).json(contacts))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
