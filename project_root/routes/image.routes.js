const express = require('express');
const router = express.Router();
const { getImage, getImageById, createImage, deleteNullImage } = require('../controllers/image.controller');

// Get images
router.get('/', getImage);

// Get image by id
router.get('/:id', getImageById);

// Create image
router.post('/', createImage);

// Delete null image
router.delete('/', deleteNullImage);

module.exports = router;