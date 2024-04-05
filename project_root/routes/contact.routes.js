const express = require('express');
const contact = require('../models/contact');
const router = express.Router();
const {getContact, createContact} = require('../controllers/contact.controller.js');

// Get contacts
router.get('/', getContact);

// Create contact 
router.post('/', createContact);

module.exports = router;