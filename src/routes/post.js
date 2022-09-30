const express = require('express');
const postController = require('../controllers/post');
const { tokenValidation } = require('../middlewares/auth');
const { categoriesExist } = require('../middlewares/category');
const { validatePost, validateUserPostUpdate, validatePostUpdate } = require('../middlewares/post');

const router = express.Router();

router.post('/',
tokenValidation,
categoriesExist,
validatePost,
postController.createPost);

router.get('/',
tokenValidation,
postController.getAll);

router.get('/:id', tokenValidation, postController.getById);

router.put('/:id', 
tokenValidation,
validateUserPostUpdate,
validatePostUpdate,
postController.updatePost);

module.exports = router;