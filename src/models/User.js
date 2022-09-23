module.exports = (sequelize, DataTypes) => {
    const userTable = sequelize.define('User', {
        id: {type: DataTypes.INTEGER, primaryKey: true },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        tableName: 'users',
        underscored: true,
    },
    );
    return userTable;
};