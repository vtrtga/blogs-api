module.exports = (sequelize, DataTypes) => {
    const blogPostTable = sequelize.define('BlogPost', {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },
    {
        tableName: 'blog_posts',
        underscored: true,
        timestamps: false,
    },
    );

    blogPostTable.associate = (models) => {
        blogPostTable.belongsTo(models.User, {foreignKey: 'id', as: 'user'})
    }
    return blogPostTable;
};