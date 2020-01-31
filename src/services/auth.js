const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const controller = require('../controller/chefDeMagasinController');

/* eslint-disable class-methods-use-this */
module.exports = class AuthService {
    getToken(name, password) {
        return controller.getChefDeMagasinByName(name).then((rows) => {
            if (!rows || (rows && !rows.length)) {
                return null;
            }

            return new Promise((resolve, reject) => {
                bcrypt.compare(password, rows[0].CDM_HASH, (err, res) => {
                    if (res) {
                        const token = jwt.sign(
                            {
                                id: rows[0].CDM_ID,
                                role: 2, // 1: chef de rayon, 2: chef de magasin, 3: PDG
                                magId: rows[0].MAG_ID,
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: '24h',
                            },
                        );
                        resolve(token);
                    }
                    reject(err);
                });
            });
        }).catch(() => null);
    }
};
