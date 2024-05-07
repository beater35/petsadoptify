const express = require("express");
const router = express.Router();
const { get8Pets, getPets, getPetsByBreed, createPet, updatePet, deletePet} = require("../controllers/pet.controller.js");

// Get 8 pets
router.get('/home', get8Pets);

// Get pets
router.get('/', getPets);

// Get pets by name
router.get('/:breed', getPetsByBreed);

// Create pet
router.post('/', createPet);

// Update pet
router.put('/:name', updatePet);

// Delete pet
router.delete('/:id', deletePet);

module.exports = router;