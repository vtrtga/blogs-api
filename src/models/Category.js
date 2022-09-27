module.exports = (sequelize, DataTypes) => {
    const categoryTable = sequelize.define('Category', {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        name: DataTypes.STRING,
    },
    {
        tableName: 'categories',
        timestamps: false,
    },
    );
    return categoryTable;
};