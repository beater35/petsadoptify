const express = require('express');
const router = express.Router();

const { uploadProductImage } = require('../controllers/upload');

router.route('/uploads').post(uploadProductImage);


module.exports = router;
