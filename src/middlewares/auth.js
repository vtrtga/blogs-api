require('dotenv/config');

const jwt = require('jsonwebtoken');
const { getUserByEmail } = require('../services/user');

const secret = process.env.JWT_SECRET || 'secretJWT';

const tokenValidation = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }
        const decoded = jwt.verify(token, secret);
        const user = await getUserByEmail(decoded.data.email);
        if (!user) {
            return res.status(401).json({ message: 'User does not exist' });
        }
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    tokenValidation,
};