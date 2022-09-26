const express = require('express');
const userMiddlewares = require('../middlewares/user');
const { userSignupController } = require('../controllers/user');

const router = express.Router();

router.post('/',
userMiddlewares.userExist,
userMiddlewares.nameValidation,
userMiddlewares.emailValidation,
userMiddlewares.passwordValidation,
userSignupController);

module.exports = router;