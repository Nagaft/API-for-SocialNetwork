const User = require('../models/userModel'); 

exports.createUser = (req, res) => {
  User.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch((error) => res.status(400).json(error));
};

exports.getAllUsers = (req, res) =>{
  User.find({})
    .then((users) => {
      res.status(200).json({
        message: 'Users retrieved successfully',
        data: users
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: 'Error retrieving users',
        details: error.message
      });
    });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ data: user });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error retrieving user', details: error.message });
    });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  User.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true })
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User updated successfully', data: updatedUser });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error updating user', details: error.message });
    });
};
exports.deleteUser = (req, res) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)
    .then((deletedUser) => {
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully', data: deletedUser });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error deleting user', details: error.message });
    });
};

exports.addFriend = (req, res) => {
  const { userId, friendId } = req.params;

  User.findByIdAndUpdate(
    userId,
    { $addToSet: { friends: friendId } },
    { new: true, runValidators: true }
  )
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'Friend added successfully', data: updatedUser });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error adding friend', details: error.message });
    });
};

exports.removeFriend = (req, res) => {
  const { userId, friendId } = req.params;

  User.findByIdAndUpdate(
    userId,
    { $pull: { friends: friendId } },
    { new: true, runValidators: true }
  )
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'Friend removed successfully', data: updatedUser });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error removing friend', details: error.message });
    });
};

exports.addFriend = (req, res) => {
  User.findByIdAndUpdate(
    req.params.userId,
    { $addToSet: { friends: req.params.friendId } },
    { new: true, runValidators: true }
  )
  .then(updatedUser => {
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  })
  .catch(err => res.status(500).json(err));
};

exports.removeFriend = (req, res) => {
  User.findByIdAndUpdate(
    req.params.userId,
    { $pull: { friends: req.params.friendId } },
    { new: true }
  )
  .then(updatedUser => {
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  })
  .catch(err => res.status(500).json(err));
};
  