const express = require('express');
const { validateCreateCategory } = require('../middlewares/category');
const categoryController = require('../controllers/category');
const { tokenValidation } = require('../middlewares/auth');

const router = express.Router();

router.post('/',
validateCreateCategory,
tokenValidation,
categoryController.create);

module.exports = router;