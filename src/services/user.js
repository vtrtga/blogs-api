const { User } = require('../models');

const loginService = async (email, password) => {
 const user = User.findOne({ where: { email, password } }); 
return user;
};

module.exports = {
    loginService,
};