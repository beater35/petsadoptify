const Pet = require('../models/pet');

// Read 8 pets
const get8Pets = async (req, res) => {
    try {
        const pets = await Pet.find({}).limit(8);
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Filter pets
const getPets = async (req, res) => {
    try {
        const { name, breed, age, gender } = req.query;
        const queryObject = {};

        if (name) {
            queryObject.name = { $regex: name, $options: 'i' };
        }

        if (breed) {
            queryObject.breed = { $regex: breed, $options: 'i' };
        }

        if (gender) {
            queryObject.gender = { $regex: gender, $options: 'i' };
        }

        if (age) {
            const ageRange = age.split('-'); // Split the age string by '-'
            if (ageRange.length === 2) { // Check if it's a valid age range
                const minAge = parseInt(ageRange[0]); // Extract the minimum age
                const maxAge = parseInt(ageRange[1]); // Extract the maximum age
                if (!isNaN(minAge) && !isNaN(maxAge)) { // Check if both minAge and maxAge are valid numbers
                    queryObject.age = { $gte: minAge, $lte: maxAge }; // Construct the age query
                }
            }
        }

        const pets = await Pet.find(queryObject);

        res.status(200).json( pets );
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
    get8Pets,
    getPets,
    getPetsByBreed,
    createPet,
    updatePet,
    deletePet
}
