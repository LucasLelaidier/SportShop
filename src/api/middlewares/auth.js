const AuthService = require('../../services/auth');

const authentify = (req, res, next) => {
    const authService = new AuthService();
    const token = authService.getToken('admin', 'password');
    if (token) {
        req.result = token;
        return next();
    }
    return res.sendStatus(400);
};

exports.authentify = authentify;
