const bcrypt = require('bcrypt');

function empty(con) {
    con.query('truncate table chef_de_magasin', (err) => {
        if (err) {
            throw err;
        }
    });
}

// Récupère tous les utilisateurs
function getChefDeMagasin(con) {
    const sql = 'select * from chef_de_magasin';

    return new Promise((resolve, reject) => {
        con.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Ajoute un utilisateur
function addChefDeMagasin(con, nom, prenom, password, profilPicture) {
    bcrypt.hash(password, 10, (err, hashed) => {
        if (err) {
            throw err;
        } else {
            const sql = `insert into 
                chef_de_magasin (
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

            con.query(sql, (error) => {
                if (error) {
                    throw error;
                }
            });
        }
    });
}

exports.empty = empty;
exports.getChefDeMagasin = getChefDeMagasin;
exports.addChefDeMagasin = addChefDeMagasin;
