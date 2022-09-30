const { Category } = require('../models');

const create = async (name) => {
    const category = Category.create({ name });

    return category;
};

const getById = async (id) => {
    const category = Category.findByPk(id);

    return category;
};

const getAll = async () => {
    const categories = Category.findAll();

    return categories;
};

module.exports = {
    getById,
    getAll,
    create,
};