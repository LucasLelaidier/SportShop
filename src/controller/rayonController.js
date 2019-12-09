const db = require('../dataBase');

function empty() {
    db.con.query('truncate table rayon', (err) => {
        if (err) {
            throw err;
        }
    });
}

// Récupère tous les rayons
function getRayons() {
    const sql = 'select * from rayon';

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Ajoute un rayon
function addRayon(nom, chefDeRayon, magasin) {
    const sql = `insert into 
                RAYON (
                    RAY_NOM,
                    CDR_ID,
                    MAG_ID
                ) 
                values (
                    "${nom}",
                    "${chefDeRayon}",
                    "${magasin}"
                )`;

    db.con.query(sql, (err) => {
        if (err) {
            throw err;
        }
    });
}

exports.empty = empty;
exports.getRayons = getRayons;
exports.addRayon = addRayon;
