const bcrypt = require('bcrypt');

const db = require('../dataBase');

function empty() {
    db.con.query('truncate table chef_de_magasin', (err) => {
        if (err) {
            throw err;
        }
    });
}

// Récupère tous les utilisateurs
function getChefsDeMagasin() {
    const sql = 'select * from chef_de_magasin';

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Récupère tous les utilisateurs
function getChefDeMagasin(id) {
    const sql = `select * from chef_de_magasin where CDM_ID="${id}"`;

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err || rows.length === 0) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Récupère tous les utilisateurs
function getChefDeMagasinByName(nom) {
    const sql = `select * from chef_de_magasin where CDM_NOM="${nom}"`;

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err || rows.length === 0) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Ajoute un utilisateur
function addChefDeMagasin(nom, prenom, password, profilPicture) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hashed) => {
            if (err) {
                reject(err);
            } else {
                const sql = `insert into 
                    chef_de_magasin (
                        CDM_NOM,
                        CDM_PRENOM,
                        CDM_HASH,
                        CDM_PP
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
exports.getChefsDeMagasin = getChefsDeMagasin;
exports.getChefDeMagasin = getChefDeMagasin;
exports.getChefDeMagasinByName = getChefDeMagasinByName;
exports.addChefDeMagasin = addChefDeMagasin;
