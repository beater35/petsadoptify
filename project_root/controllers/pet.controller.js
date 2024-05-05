const Pet = require('../models/pet');

// Read pets
const getPets = async (req, res) => {
    try {
        const pets = await Pet.find({});
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Read pet by breed
const getPetsByBreed = async (req, res) => {
    try {
        const { breed } = req.params;
        const pets = await Pet.find({ breed: breed });
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create pet
const createPet = async (req, res) => {
    try {
        const pet = await Pet.create(req.body);
        res.status(201).json(pet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update pet
const updatePet = async (req, res) => {
    try {
        const { name } = req.params;
        const pet = await Pet.findOneAndUpdate({ name: name}, req.body, { new: true });

        if (!pet) {
            return res.status(404).json({ message: 'Pet not found' });
        }

        res.status(201).json(pet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete pet
const deletePet = async (req, res) => {
    try {
        const { name } = req.params;
        const pet = await Pet.deleteMany({ name: name });
        
        if (!name) {
            return res.status(404).json({ message: 'Pet not found'});
        }
        res.status(200).json({ message: 'Pet deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getPets,
    getPetsByBreed,
    createPet,
    updatePet,
    deletePet
}
