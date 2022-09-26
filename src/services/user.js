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

const checkIfUserExist = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
};

module.exports = {
    checkIfUserExist,
    userSignup,
    loginService,
};