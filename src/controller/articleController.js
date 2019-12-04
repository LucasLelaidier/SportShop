function empty(con) {
    con.query('truncate table article', (err) => {
        if (err) {
            throw err;
        }
    });
}

// Récupère tous les articles
function getArticles(con) {
    const sql = 'select * from articles';

    return new Promise((resolve, reject) => {
        con.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Récupère un article
function getArticle(con, article) {
    const sql = `select * from article where art_nom="${article}"`;

    return new Promise((resolve, reject) => {
        con.query(sql, (err, rows) => {
            if (err || rows.length === 0) {
                reject(new Error('no result found'));
            }
            resolve(rows);
        });
    });
}

// Ajoute un article
function addArticle(con, nom) {
    const sql = `insert into 
                ARTICLE (
                    ART_COM,
                ) 
                values (
                    "${nom}"
                )`;

    con.query(sql, (err) => {
        if (err) {
            throw err;
        }
    });
}

exports.empty = empty;
exports.getArticles = getArticles;
exports.getArticle = getArticle;
exports.addArticle = addArticle;
