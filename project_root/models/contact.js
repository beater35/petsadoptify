const mongoose = require ('mongoose');

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        address: {
            type: String,
        },
        email: {
            type: String,
        },
        message: {
            type: String,
            required: true
        }
    }, 
    
    { collection: "contacts" }
);

const contact = mongoose.model('Contact', contactSchema);

module.exports = contact;