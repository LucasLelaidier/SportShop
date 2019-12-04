const bcrypt = require('bcrypt');

// Récupère tous les utilisateurs
function getChefDeRayon(con) {
    const sql = 'select * from chef_de_rayon';

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
function addChefDeRayon(con, nom, prenom, password, profilPicture) {
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

            con.query(sql, (error) => {
                if (error) {
                    throw error;
                }
            });
        }
    });
}

exports.getChefDeRayon = getChefDeRayon;
exports.addChefDeRayon = addChefDeRayon;
