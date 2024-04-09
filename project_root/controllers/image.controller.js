const image = require('../models/image');

// Read images
const getImage = async (req, res) => {
    try {
        const img = await image.find({});
        res.status(200).json(img);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Read image by id
const getImageById = async (req, res) => {
    try {
        const { id } = req.params;
        const img = await image.findById(id);
        res.status(200).json(img);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create image
const createImage = async (req, res) => {
    try {
        const img = await image.create(req.body);
        res.status(201).json(img);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete null image
const deleteNullImage = async (req, res) => {
    try {
        // Delete documents with image field equal to null
        const result = await image.deleteMany({ image: '' });
        res.status(200).json({ message: `${result.deletedCount} documents deleted successfully.` });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete documents.', error: error.message });
    }
};

module.exports = { getImage, getImageById, createImage, deleteNullImage }