// routes/applicationFormRoutes.js

const express = require("express");
const router = express.Router();
const { getForm, createForm } = require("../controllers/applicationFormController");

// Route to handle form submission
router.get("/", getForm);

router.post("/", createForm);

module.exports = router;
