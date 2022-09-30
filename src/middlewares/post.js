const Joi = require('joi');
const decodeToken = require('../utils/decode');
const userService = require('../services/user');
const postService = require('../services/post');

const postSchema = (body) => Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
}).validate(body);

const postUpdateSchema = (body) => Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
}).validate(body);

const validatePost = (req, res, next) => {
    const { body } = req;
    const { error } = postSchema(body);
    console.log(error);

    if (error) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

const validateUserPostUpdate = async (req, res, next) => {
    const { authorization } = req.headers;
    const { id } = req.params;
    const { email } = decodeToken(authorization).data;
    const user = await userService.getUserByEmail(email);
    const post = await postService.getById(id);

    if (post.userId !== user.id) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
    next();
};

const validatePostUpdate = (req, res, next) => {
    const { body } = req;
    const { error } = postUpdateSchema(body);

    if (error) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    next();
};

module.exports = {
    validatePostUpdate,
    validateUserPostUpdate,
    validatePost,
};