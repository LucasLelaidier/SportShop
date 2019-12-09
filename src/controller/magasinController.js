const db = require('../dataBase');

// Récupère tous les magasins
function getMagasins() {
    const sql = 'select * from magasin';

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
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
        db.con.query(sql, (err, rows) => {
            if (err || rows.lenght === 0) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Ajoute un magasin
function addMagasin(ville, adresse, chefDeMagasin) {
    const sql = `insert into 
                MAGASIN (
                    MAG_VILLE, 
                    MAG_ADRESSE,
                    CDM_ID
                ) 
                values (
                    "${ville}", 
                    "${adresse}",
                    "${chefDeMagasin}"
                )`;
    db.con.query(sql, (err) => {
        if (err) {
            throw err;
        }
    });
}

exports.getMagasin = getMagasin;
exports.getMagasins = getMagasins;
exports.addMagasin = addMagasin;
