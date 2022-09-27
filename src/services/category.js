const { Category } = require('../models');

const create = async ({ name }) => {
    const category = Category.create({ name });

    return category;
};

module.exports = {
    create,
};