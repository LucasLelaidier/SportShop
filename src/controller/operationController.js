const db = require('../dataBase');

// Récupère tous les articles
function getOperations() {
    const sql = 'select * from operation join type using (typ_id);';

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

function getOperation(id) {
    const sql = `select * from operation  join type using (typ_id) where ope_id="${id}"`;

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err || rows.length === 0) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Ajoute un article
function addOperation(type, valeur, article, rayon) {
    const sql = `insert into 
                OPERATION (
                    OPE_TYPE,
                    OPE_VALEUR,
                    ART_ID,
                    RAY_ID
                ) 
                values (
                    "${type}",
                    "${valeur}",
                    "${article}",
                    "${rayon}"
                )`;

    db.con.query(sql, (err) => {
        if (err) {
            throw err;
        }
    });
}

exports.getOperations = getOperations;
exports.getOperation = getOperation;
exports.addOperation = addOperation;
