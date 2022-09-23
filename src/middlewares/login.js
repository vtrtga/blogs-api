const Joi = require('joi');

const joiLogin = (body) => Joi.object({
    email: Joi.string().email(),
    password: Joi.string().required(),
}).validate(body);

const validateLogin = (req, res, next) => {
    const { body } = req;
    const { error } = joiLogin(body);

    if (error) {
        console.log(error);
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

module.exports = {
    validateLogin,
};