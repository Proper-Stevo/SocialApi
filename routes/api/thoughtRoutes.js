const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtControllers.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:courseId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);


// api/thoughts/thoughtID/reactions
router.route('/:thoughtId/reactions/:reactionsId').post(addReaction);

// api/thoughts/:thoughtID/reactions/reactionID
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router;

