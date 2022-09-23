const express = require('express');
const userController = require('../controllers/user');
const { validateLogin } = require('../middlewares/login');

const router = express.Router();

router.post('/', validateLogin, userController.getLoginTokenController);

module.exports = router;