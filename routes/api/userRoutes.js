const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router.route('/:usertId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/user/:friendId/friend
router.route('/:userId/friend').put(addFriend);

// /api/user/:userId/friend/:friendId
router.route('/:userId/friend/:friendId').delete(removeFriend);

module.exports = router;