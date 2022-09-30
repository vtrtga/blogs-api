const express = require('express');
const postController = require('../controllers/post');
const { tokenValidation } = require('../middlewares/auth');
const { categoriesExist } = require('../middlewares/category');
const { validatePost } = require('../middlewares/post');

const router = express.Router();

router.post('/',
tokenValidation,
categoriesExist,
validatePost,
postController.createPost);

module.exports = router;