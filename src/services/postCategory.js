const { PostCategory } = require('../models');

const getPostCategoryById = async (postId) => PostCategory.findOne({ where: { postId } });

module.exports = {
    getPostCategoryById,
};