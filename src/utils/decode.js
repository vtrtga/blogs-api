const jwt = require('jsonwebtoken');

const decodedToken = (token) => {
    const decoded = jwt.decode(token);
    return decoded;
};

// desencodar email e encontrar id do usuario através dele

module.exports = decodedToken;