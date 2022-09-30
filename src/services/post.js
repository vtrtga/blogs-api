const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../models');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config');

const sequelize = new Sequelize(config[env]);

const getAll = async () => BlogPost.findAll();

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