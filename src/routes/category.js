const express = require('express');
const { validateCreateCategory } = require('../middlewares/category');
const categoryController = require('../controllers/category');
const { tokenValidation } = require('../middlewares/auth');

const router = express.Router();

router.post('/',
tokenValidation,
validateCreateCategory,
categoryController.create);

router.get('/', 
tokenValidation,
categoryController.getAll);

module.exports = router;