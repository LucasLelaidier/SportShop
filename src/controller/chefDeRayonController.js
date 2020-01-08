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
function getChefsDeRayon() {
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

// Récupère un chef de rayon
function getChefDeRayon(id) {
    const sql = `select * from chef_de_rayon where cdr_id="${id}"`;

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err || rows.length === 0) {
                reject(new Error('no result found'));
            }
            resolve(rows);
        });
    });
}

// Ajoute un utilisateur
function addChefDeRayon(nom, prenom, password, profilPicture) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hashed) => {
            if (err) {
                reject(err);
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
                        reject(err);
                    }
                });
                resolve(0);
            }
        });
    });
}

exports.empty = empty;
exports.getChefsDeRayon = getChefsDeRayon;
exports.getChefDeRayon = getChefDeRayon;
exports.addChefDeRayon = addChefDeRayon;
