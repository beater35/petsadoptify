const express = require("express");
const Admin = require("../models/admin.js");
const { createAdmin, getAdminByEmail, getAdmin, deleteAdmin } = require("../controllers/admin.controller.js");

const router = express.Router();

// Get admin
router.get('/', getAdmin);

// Get admin by email
router.get('/:email', getAdminByEmail);

// Create admin
router.post('/', createAdmin);

// Delete admin
router.delete('/:email', deleteAdmin);

module.exports = router