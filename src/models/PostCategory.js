module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory',
     {
        categoryId: DataTypes.INTEGER,
        postId: DataTypes.INTEGER,
     },
     {
        timestamps: false,
        underscored: true,
        tableName: 'post_category',
     });

     PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'category',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });

        models.Category.belongsToMany(models.BlogPost, {
            as: 'blog_post',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
     };

     return PostCategory;
};