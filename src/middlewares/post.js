const Joi = require('joi');

const postSchema = (body) => Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
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

module.exports = {
    validatePost,
};