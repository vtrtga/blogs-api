const { checkIfUserExist } = require('../services/user');

// const userSignupSchema = (body) => Joi.object({
//     displayName: Joi.string().min(8).required(),
//     email: Joi.string().required().email(),
//     password: Joi.string().required().min(6),
//     image: Joi.string(),
// }).validate(body);

const nameValidation = (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
    return res.status(400).json({ 
        message: '"displayName" length must be at least 8 characters long', 
    });
    }
    next();
};

const emailValidation = (req, res, next) => {
    const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i;
    const { email } = req.body;
    if (!emailRegExp.test(email)) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }

    next();
};

const passwordValidation = (req, res, next) => {
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(400).json({
         message: '"password" length must be at least 6 characters long', 
        });
    }
    next();
};

const userExist = async (req, res, next) => {
    const { email } = req.body;
    const user = await checkIfUserExist(email);
    if (user) {
        return res.status(409).json({ message: 'User already registered' });
    }
    next();
};

module.exports = {
    userExist,
    nameValidation,
    emailValidation,
    passwordValidation,
};