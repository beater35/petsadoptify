const User = require('../models/user');

// Read users
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Read user by email
const getUser = async (req, res) => {
	try {
		const { email } = req.params;
		const user = await User.findOne({ email: email });
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Create user
const createUser = async (req, res) => {
	try {
		const user = await User.create(req.body);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({message: error.message});
	}
} 

// Update user
const updateUser = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOneAndUpdate({ email: email }, req.body, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete user
const deleteUser = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOneAndDelete({ email: email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}