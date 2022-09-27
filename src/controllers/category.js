const categoryService = require('../services/category');

const create = async (req, res) => {
    const { name } = req.body;
    const newCategory = await categoryService.create(name);
    return res.status(201).json(newCategory);
};

const getAll = async (_req, res) => {
    const getCategories = await categoryService.getAll();

    return res.status(200).json(getCategories);
};

module.exports = {
    getAll,
    create,
};