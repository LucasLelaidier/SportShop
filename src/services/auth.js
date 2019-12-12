const jwt = require('jsonwebtoken');

/* eslint-disable class-methods-use-this */
module.exports = class AuthService {
    getToken(user, password) {
        // For the given username fetch user from DB
        const mockedUsername = 'admin';
        const mockedPassword = 'password';

        // Verify that the provided username and password are correct (stored in database)
        // It should use another service to check if credential are correct
        if (user === mockedUsername && password === mockedPassword) {
            const token = jwt.sign(
                { username: user },
                process.env.JWT_KEY,
                { expiresIn: '24h' },
            );
            return token;
        }
        return null;
    }
};
