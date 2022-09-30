const Sequelize = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config');

const sequelize = new Sequelize(config[env]);

const getAll = async () => {
    const posts = BlogPost.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return posts;
};

const create = async (title, content, categoryIds, userId) => {
    const t = await sequelize.transaction();
    try {
        const newPost = await BlogPost.create({
            title,
            content,
            userId,
            published: new Date(),
            updated: new Date(),
        }, { transaction: t });
        
        const postCategoryBulk = categoryIds
        .map((cId) => ({ categoryId: cId, postId: newPost.id }));
        await PostCategory.bulkCreate(postCategoryBulk, { transaction: t });
        await t.commit();
        return newPost;
    } catch (err) {
        t.rollBack();
    }
};

module.exports = {
    getAll,
    create,
};