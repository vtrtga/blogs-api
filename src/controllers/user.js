const { loginService } = require('../services/user');
const getToken = require('../utils/jwtLogin');

const getLoginTokenController = async (req, res) => {
    const { email, password } = req.body;
    const login = await loginService(email, password);

    if (login.type) {
        return res.status(400).json({ message: login.message });
    }

    return res.status(200).json({ message: getToken(email) });
};

module.exports = {
    getLoginTokenController,
};