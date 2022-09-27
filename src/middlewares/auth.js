require('dotenv/config');

const jwt = require('jsonwebtoken');
const { getUserById } = require('../services/user');

const secret = 'secretJWT';

const tokenValidation = async (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token, '----------');
    try {
        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }
        const decoded = jwt.verify(token, secret);
        const user = await getUserById(decoded.data.userId);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (err) {
        console.log(secret);
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    tokenValidation,
};