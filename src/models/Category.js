module.exports = (sequelize, DataTypes) => {
    const categoryTable = sequelize.define('Category', {
        name: DataTypes.STRING,
    },
    {
        tableName: 'categories',
        timestamps: false,
    },
    );
    return categoryTable;
};