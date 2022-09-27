const express = require('express');
const userMiddlewares = require('../middlewares/user');
const { userSignupController, getAllUsers } = require('../controllers/user');
const { tokenValidation } = require('../middlewares/auth');

const router = express.Router();

router.post('/',
userMiddlewares.userExist,
userMiddlewares.nameValidation,
userMiddlewares.emailValidation,
userMiddlewares.passwordValidation,
userSignupController);

router.get('/', tokenValidation, getAllUsers);

router.get('/:id', tokenValidation);

module.exports = router;