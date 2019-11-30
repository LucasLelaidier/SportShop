const con = require('../dataBase');

// Récupère tous les magasins
function getMagasins() {
    const sql = 'select * from magasin';

    return new Promise((resolve, reject) => {
        con.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Récupère tous les magasins
function getMagasin(magasin) {
    const sql = `select * from magasin where mag_ville="${magasin}"`;

    return new Promise((resolve, reject) => {
        con.query(sql, (err, rows) => {
            if (err || rows.lenght === 0) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Ajoute un magasin
function addMagasin(ville, adresse) {
    const sql = `insert into 
                MAGASIN (
                    MAG_VILLE, 
                    MAG_ADRESSE
                ) 
                values (
                    "${ville}", 
                    "${adresse}"
                )`;

    con.query(sql, (err) => {
        if (err) {
            throw err;
        }
    });
}

exports.getMagasins = getMagasins;
exports.getMagasin = getMagasin;
exports.addMagasin = addMagasin;
