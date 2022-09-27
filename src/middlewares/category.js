require('dotenv/config');

const Joi = require('joi');

const createCategorySchema = (body) => Joi.object({
    name: Joi.string().required().min(1),
}).validate(body);

const validateCreateCategory = (req, res, next) => {
    const { name } = req.body;
    const { error } = createCategorySchema({ name });

    if (error) res.status(400).json({ message: '"name" is required' });

    next();
};

module.exports = {
    validateCreateCategory,
};