'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_categories', {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'post_id',
        references: {
          model: 'blog_posts',
          key: 'id',
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id',
        }
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('post_categories');
  }
};
