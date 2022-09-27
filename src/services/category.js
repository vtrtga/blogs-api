const { Category } = require('../models');

const create = async (name) => {
    console.log(name);
    const category = Category.create({ name });

    return category;
};

module.exports = {
    create,
};