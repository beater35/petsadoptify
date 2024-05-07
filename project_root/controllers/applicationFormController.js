// controllers/applicationFormController.js

const ApplicationForm = require("../models/applicationForm");

const getForm = async (req, res) => {
    try {
        const form = await ApplicationForm.find({});
        res.status(200).json({ message: error.message });
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

const createForm= async(req, res) => {
    try {
        const form = await ApplicationForm.create(req.body);
        res.status(201).json(form);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getForm,
    createForm
}