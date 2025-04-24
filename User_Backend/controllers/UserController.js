import MERNUser from "../models/UserModel.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await MERNUser.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message }); // 'res' instead of 'response'
  }
};

// Get single user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await MERNUser.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message }); // 'res' instead of 'response'
  }
};

// Create a new user
export const saveUser = async (req, res) => {
  const user = new MERNUser(req.body);
  try {
    const insertedUser = await user.save();
    res.status(201).json(insertedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await MERNUser.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await MERNUser.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
