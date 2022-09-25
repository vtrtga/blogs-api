const { loginService } = require('../services/user');
const getToken = require('../utils/jwtLogin');

const getLoginTokenController = async (req, res) => {
        const { email, password } = req.body;
        const user = await loginService(email, password);
        if (!user) {
            return res.status(400).json({ message: 'Invalid fields' });
        }
        return res.status(200).json({ token: getToken(email) });
};

module.exports = {
    getLoginTokenController,
};