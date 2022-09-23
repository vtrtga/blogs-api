const { User } = require('../models');

const loginService = async (email, password) => {
 const user = User.findOne(
    {
      where: {
          email,
          password,
        }, 
    },
); 
if (!user) {
    return { type: 400, message: 'Invalid fields' };
}
return { type: null };
};

module.exports = {
    loginService,
};