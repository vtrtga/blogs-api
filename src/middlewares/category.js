require('dotenv/config');

const Joi = require('joi');
const categoryService = require('../services/category');

const createCategorySchema = (body) => Joi.object({
    name: Joi.string().required().min(1),
}).validate(body);

const validateCreateCategory = (req, res, next) => {
    const { name } = req.body;
    const { error } = createCategorySchema({ name });

    if (error) return res.status(400).json({ message: '"name" is required' });

    next();
};

const categoriesExist = async (req, res, next) => {
    const { categoryIds } = req.body;
    const verifyCategories = await Promise.all(categoryIds
    .map((id) => categoryService.getById(id)));

    console.log(verifyCategories);
    
    if (verifyCategories.some((item) => item === null || item === undefined)) {
        return res.status(400).json({ message: '"categoryIds" not found' });
    }

    next();
};

module.exports = {
    categoriesExist,
    validateCreateCategory,
};