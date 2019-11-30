const jwt = require('jsonwebtoken');


function auth(token) {
    if (!token) {
        throw new Error('A token is needed');
    }
    return jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            throw new Error('Invalid token');
        }
        return decoded;
    });
}

exports.auth = auth;
