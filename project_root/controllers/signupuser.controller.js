const Signup = require('../models/signup');

// Read all signups
const getSignups = async (req, res) => {
    try {
        const signups = await Signup.find({});
        res.status(200).json(signups);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Read signup by email
const getSignupByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const signup = await Signup.findOne({ email: email });
        res.status(200).json(signup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create signup
const createSignup = async (req, res) => {
    try {
        const signup = await Signup.create(req.body);
        res.status(201).json(signup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update signup
const updateSignup = async (req, res) => {
    try {
        const { email } = req.params;
        const signup = await Signup.findOneAndUpdate({ email: email }, req.body, { new: true });

        if (!signup) {
            return res.status(404).json({ message: 'Signup not found' });
        }

        res.status(200).json(signup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete signup
const deleteSignup = async (req, res) => {
    try {
        const { email } = req.params;
        const signup = await Signup.findOneAndDelete({ email: email });

        if (!signup) {
            return res.status(404).json({ message: 'Signup not found' });
        }
        res.status(200).json({ message: 'Signup deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getSignups,
    getSignupByEmail,
    createSignup,
    updateSignup,
    deleteSignup
}
