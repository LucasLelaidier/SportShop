const db = require('../dataBase');

// Récupère tous les magasins
function getMagasins() {
    const sql = 'select MAG_ID, MAG_VILLE, MAG_ADRESSE, CDM_ID, count(distinct RAY_ID) as rayons, count(ART_ID) as articles from magasin left join rayon using(MAG_ID) left join appartient using(RAY_ID) group by MAG_ID, MAG_VILLE, MAG_ADRESSE, CDM_ID;';

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Récupère le magasin
function getMagasin(magasin) {
    const sql = `select * from magasin where mag_id="${magasin}"`;

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err || rows.length === 0) {
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

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err) => {
            if (err) {
                reject(err);
            }
            resolve(0);
        });
    });
}

exports.getMagasin = getMagasin;
exports.getMagasins = getMagasins;
exports.addMagasin = addMagasin;
