const db = require('../dataBase');

// Récupère tous les articles
function getOperations() {
    const sql = 'select * from operation join type using(TYP_ID) join article using(ART_ID) join rayon using(RAY_ID) order by OPE_DATE desc';

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
    const sql = `select * from operation where ope_id="${id}"`;

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
function addOperation(valeur, date, article, rayon, type) {
    const sql = `insert into 
                OPERATION (
                    OPE_VALEUR,
                    OPE_DATE,
                    ART_ID,
                    RAY_ID,
                    TYP_ID
                ) 
                values (
                    "${valeur}",
                    "${date}",
                    "${article}",
                    "${rayon}",
                    "${type}"
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

exports.getOperations = getOperations;
exports.getOperation = getOperation;
exports.addOperation = addOperation;
