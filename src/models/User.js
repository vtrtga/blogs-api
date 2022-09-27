module.exports = (sequelize, DataTypes) => {
    const userTable = sequelize.define('User', {
        id: {type: DataTypes.INTEGER, primaryKey: true },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: {type: DataTypes.STRING, allowNull: true},
    },
    {
        tableName: 'users',
        underscored: true,
        timestamps: false,
    },
    );

    userTable.associate = (models) => {
        userTable.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'users' })
    };
    return userTable;
};