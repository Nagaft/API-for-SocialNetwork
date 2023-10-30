const Thought = require('../models/thoughtModel'); 

exports.createThought = (req, res) => {
  const { thoughtText, userId } = req.body;

  if (!thoughtText || !userId) {
    return res.status(400).json({ error: 'Thought text and user ID are required' });
  }

  const newThought = new Thought({
    thoughtText,
    userId, 
  });

  newThought.save()
    .then((thought) => {
      res.status(201).json({
        message: 'Thought created successfully',
        data: thought
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: 'Error creating thought',
        details: error.message
      });
    });
};


exports.getAllThoughts = (req, res) => {
  Thought.find({})
    .then((thoughts) => {
      res.status(200).json({
        message: 'Thoughts retrieved successfully',
        data: thoughts
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: 'Error retrieving thoughts',
        details: error.message
      });
    });
};

exports.getThoughtById = (req, res) => {
  const { id } = req.params;

  Thought.findById(id)
    .then((thought) => {
      if (!thought) {
        return res.status(404).json({
          error: 'Thought not found'
        });
      }

      res.status(200).json({
        message: 'Thought retrieved successfully',
        data: thought
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: 'Error retrieving thought',
        details: error.message
      });
    });
};

exports.updateThought = (req, res) => {
  const { id } = req.params;

  const updatedData = req.body;

  Thought.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true })
    .then((updatedThought) => {
      if (!updatedThought) {
        return res.status(404).json({
          error: 'Thought not found'
        });
      }

      res.status(200).json({
        message: 'Thought updated successfully',
        data: updatedThought
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: 'Error updating thought',
        details: error.message
      });
    });
};

exports.deleteThought = (req, res) => {
  const { id } = req.params;

  Thought.findByIdAndDelete(id)
    .then((deletedThought) => {
      if (!deletedThought) {
        return res.status(404).json({
          error: 'Thought not found'
        });
      }

      res.status(200).json({
        message: 'Thought deleted successfully',
        data: deletedThought
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: 'Error deleting thought',
        details: error.message
      });
    });
};

exports.addReaction = (req, res) => {
  Thought.findByIdAndUpdate(
    req.params.thoughtId,
    { $push: { reactions: req.body } },
    { new: true, runValidators: true }
  )
  .then(updatedThought => {
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(updatedThought);
  })
  .catch(err => res.status(500).json(err));
};

exports.removeReaction = (req, res) => {
  Thought.findByIdAndUpdate(
    req.params.thoughtId,
    { $pull: { reactions: { reactionId: req.params.reactionId } } },
    { new: true }
  )
  .then(updatedThought => {
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }
    res.json(updatedThought);
  })
  .catch(err => res.status(500).json(err));
};