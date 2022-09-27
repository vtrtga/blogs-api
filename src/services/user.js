const { User } = require('../models');

const loginService = async (email, password) => {
 const user = User.findOne({ where: { email, password } }); 
return user;
};

const userSignup = async ({ displayName, email, password, image }) => {
    const user = User.create({
        displayName,
        email,
        password,
        image,
    });

    return user;
};

const getUserById = async (id) => {
    const user = User.findByPk({ where: id });
    return user;
};

const getUserByEmail = async (email) => {
    const user = User.findOne({ where: { email } });

    return user;
};

const checkIfUserExist = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
};

const getAllUsers = async () => {
    const users = await User.findAll();
    
    return users;
};

module.exports = {
    getUserByEmail,
    getAllUsers,
    getUserById,
    checkIfUserExist,
    userSignup,
    loginService,
};