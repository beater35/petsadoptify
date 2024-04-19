// routes/authRoutes.js

const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/forgot-password', authController.forgotPassword);

module.exports = router;
