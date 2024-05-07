// models/applicationForm.js

const mongoose = require("mongoose");

const applicationFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    adopt_reason: {
        type: String,
        required: true
    }

}, {collection : "applicationForms"}
);


const ApplicationForm = mongoose.model("ApplicationForm", applicationFormSchema);

module.exports = ApplicationForm;
