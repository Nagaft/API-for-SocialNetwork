const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  reactions: [reactionSchema]
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
