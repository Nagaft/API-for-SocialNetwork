const router = require('express').Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../controllers/userController');

router
  .route('/')
  .post(createUser)
  .get(getAllUsers);

router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  router
  .route('/:userId/friends/:friendId')
  .post(userController.addFriend)    
  .delete(userController.removeFriend);

router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;

