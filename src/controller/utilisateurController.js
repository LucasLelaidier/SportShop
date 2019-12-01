const bcrypt = require('bcrypt');
const db = require('../dataBase');

// Récupère tous les utilisateurs
function getUtilisateurs() {
    const sql = 'select * from utilisateur';

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Ajoute un utilisateur
function addUtilisateur(nom, prenom, password, profilPicture) {
    bcrypt.hash(password, 10, (err, hashed) => {
        if (err) {
            throw err;
        } else {
            const sql = `insert into 
                UTILISATEUR (
                    UTI_NOM,
                    UTI_PRENOM,
                    UTI_HASH,
                    UTI_PP
                ) 
                values (
                    "${nom}", 
                    "${prenom}", 
                    "${hashed}", 
                    "${profilPicture}"
                )`;

            db.con.query(sql, (error) => {
                if (error) {
                    throw error;
                }
            });
        }
    });
}

exports.addUtilisateur = addUtilisateur;
exports.getUtilisateurs = getUtilisateurs;
