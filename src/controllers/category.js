const categoryService = require('../services/category');

const create = async (req, res) => {
    const { body } = req;
    const newCategory = await categoryService.create(body);
    return res.status(201).json(newCategory);
};

module.exports = {
    create,
};