const Admin = require('../models/admin');

const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.find({});
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getAdminByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const admin = await Admin.findOne({ email: email });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createAdmin = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

const deleteAdmin = async (req, res) => {
  try {
    const { email } = req.params;
    const admin = await Admin.findOneAndDelete({ email: email });
    res.status(200).json({ message: 'Admin deleted' });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found'});
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}

module.exports = {
  getAdmin,
  getAdminByEmail,
  createAdmin,
  deleteAdmin
}