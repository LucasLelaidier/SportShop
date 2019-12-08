const bcrypt = require('bcrypt');

const db = require('../dataBase');

function empty() {
    db.con.query('truncate table chef_de_rayon', (err) => {
        if (err) {
            throw err;
        }
    });
}


// Récupère tous les utilisateurs
function getChefDeRayon() {
    const sql = 'select * from chef_de_rayon';

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Ajoute un utilisateur
function addChefDeRayon(nom, prenom, password, profilPicture) {
    bcrypt.hash(password, 10, (err, hashed) => {
        if (err) {
            throw err;
        } else {
            const sql = `insert into 
                chef_de_rayon (
                    CDR_NOM,
                    CDR_PRENOM,
                    CDR_HASH,
                    CDR_PP
                ) 
                values (
                    "${nom}", 
                    "${prenom}", 
                    "${hashed}", 
                    "${profilPicture}"
                )`;

            db.con.query(sql, (error) => {
                if (error) {
                    throw error;
                }
            });
        }
    });
}

exports.empty = empty;
exports.getChefDeRayon = getChefDeRayon;
exports.addChefDeRayon = addChefDeRayon;
