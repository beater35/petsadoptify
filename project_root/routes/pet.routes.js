const express = require("express");
const router = express.Router();
const {getPets, getPetsByBreed, createPet, updatePet, deletePet} = require("../controllers/pet.controller.js");

// Get pets
router.get('/', getPets);

// Get pets by name
router.get('/:breed', getPetsByBreed);

// Create pet
router.post('/', createPet);

// Update pet
router.put('/:name', updatePet);

// Delete pet
router.delete('/:name', deletePet);

module.exports = router;