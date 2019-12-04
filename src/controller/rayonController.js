
function empty(con) {
    con.query('truncate table rayon', (err) => {
        if (err) {
            throw err;
        }
    });
}

// Récupère tous les rayons
function getRayons(con) {
    const sql = 'select * from rayon';

    return new Promise((resolve, reject) => {
        con.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Ajoute un rayon
function addRayon(con, nom, chefDeRayon, magasin) {
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

    con.query(sql, (err) => {
        if (err) {
            throw err;
        }
    });
}

exports.empty = empty;
exports.getRayons = getRayons;
exports.addRayon = addRayon;
