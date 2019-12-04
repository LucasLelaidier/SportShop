function empty(con) {
    con.query('truncate table magasin', (err) => {
        if (err) {
            throw err;
        }
    });
}

// Récupère tous les magasins
function getMagasins(con) {
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
function getMagasin(con, magasin) {
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
function addMagasin(con, ville, adresse, chefDeMagasin) {
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

    con.query(sql, (err) => {
        if (err) {
            throw err;
        }
    });
}

exports.empty = empty;
exports.getMagasins = getMagasins;
exports.getMagasin = getMagasin;
exports.addMagasin = addMagasin;
