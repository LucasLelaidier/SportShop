const db = require('../dataBase');

function empty(con) {
    con.query('truncate table operation', (err) => {
        if (err) {
            throw err;
        }
    });
}

// Récupère tous les articles
function getOperations() {
    const sql = 'select * from operation';

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err) {
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

exports.empty = empty;
exports.getOperations = getOperations;
exports.addOperation = addOperation;
