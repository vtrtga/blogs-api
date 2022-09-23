const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'charlie';

const jwtLogin = (email) => {
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { email } }, secret, jwtConfig);

    return token;
};

module.exports = jwtLogin;