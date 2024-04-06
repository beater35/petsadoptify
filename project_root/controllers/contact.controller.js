const contact = require('../models/contact');

// Read contacts
const getContact = async (req, res) => {
    try {
        const contacts = await contact.find({});
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createContact = async (req, res) => {
    try {
        const contact = await contact.create(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getContact, createContact}