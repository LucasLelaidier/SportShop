function empty(con) {
    con.query('truncate table operation', (err) => {
        if (err) {
            throw err;
        }
    });
}

// Récupère tous les articles
function getOperations(con) {
    const sql = 'select * from operation';

    return new Promise((resolve, reject) => {
        con.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Ajoute un article
function addOperation(con, type, valeur, article, rayon) {
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

    con.query(sql, (err) => {
        if (err) {
            throw err;
        }
    });
}

exports.empty = empty;
exports.getOperations = getOperations;
exports.addOperation = addOperation;
