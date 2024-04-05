const mongoose = require ('mongoose');

const contactSchema = new mongoose.Schema(
    {
        message: {
            type: String,
            required: true
        }
    }, 
    
    { collection: "contacts" }
);

const contact = mongoose.model('Contact', contactSchema);

module.exports = contact;