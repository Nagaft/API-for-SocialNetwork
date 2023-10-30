const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
    ],
    thoughts: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Thought'
        }
      ],
    
});


const User = mongoose.model('User', userSchema);

module.exports = User;
