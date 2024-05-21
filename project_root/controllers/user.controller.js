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

// Get user by email
const getUser_username = async (req, res) => {
    const email = req.params.email;

    try {
        // Find user by email in the database
        const user = await User.findOne({ email });

        if (!user) {
            // If user with the email is not found, return 404 Not Found error
            return res.status(404).json({ error: "User not found" });
        }

        // If user is found, return user data, including username
        res.status(200).json({ username: user.username });
    } catch (error) {
        // If there's an error, return 500 Internal Server Error
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Create user
const createUser = async (req, res) => {
	try {
		const user = await User.create(req.body);
		res.status(201).json({ user });
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

const deleteAll = async (req, res) => {
    try {
        const result = await User.deleteMany({});

        // Check if any documents were deleted
        if (result.deletedCount > 0) {
            // If documents were deleted, return a success message
            res.status(200).json({ message: `${result.deletedCount} documents deleted successfully` });
        } else {
            // If no documents were deleted, return a message indicating that there were no documents to delete
            res.status(404).json({ message: 'No documents found to delete' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    deleteAll,
    getUser_username
}