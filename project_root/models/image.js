const mongoose = require('mongoose');

// Define the schema for image data
const imageSchema = new mongoose.Schema({
  filename: String,         // Name of the image file
  contentType: String,      // Content type of the image (e.g., image/jpeg)
  imageBuffer: Buffer       // Buffer containing the image data
});

// Create a model for the image schema
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
