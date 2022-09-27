const { Category } = require('../models');

const create = async (name) => {
    const category = Category.create({ name });

    return category;
};

const getAll = async () => {
    const categories = Category.findAll();

    return categories;
};

module.exports = {
    getAll,
    create,
};