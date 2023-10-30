const express = require('express');
const thoughtController = require('../controllers/thoughtController'); // Asegúrate de que la ruta sea correcta
const router = express.Router();

router
  .route('/')
  .post(thoughtController.createThought)
  .get(thoughtController.getAllThoughts);

router
  .route('/:id')
  .get(thoughtController.getThoughtById)
  .put(thoughtController.updateThought)
  .delete(thoughtController.deleteThought);

router
.route('/:thoughtId/reactions')
.post(thoughtController.addReaction);

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(thoughtController.removeReaction);

module.exports = router;
