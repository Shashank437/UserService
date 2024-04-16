const router = require('express').Router();
const userController = require('./user.controller.js');
const authenticate = require('./authenticate.user.js');

router
    .route('/')
    .post(userController.createUser)
    .get(authenticate(), userController.getAllUsers);

router
    .route('/:id')
    .get(authenticate(), userController.getOneUser)
    .put(authenticate(), userController.updateUser)
    .delete(authenticate(), userController.deleteUser);

router
    .route('/login')
    .post(userController.login);

router
    .route('/logout')
    .post(authenticate(), userController.logout);

module.exports = router;
