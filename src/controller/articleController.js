const db = require('../dataBase');

// Récupère tous les articles
function getArticles() {
    const sql = 'select * from articles';

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

// Récupère un article
function getArticle(article) {
    const sql = `select * from article where art_nom="${article}"`;

    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err || rows.length === 0) {
                reject(new Error('no result found'));
            }
            resolve(rows);
        });
    });
}

// Ajoute un article
function addArticle(nom) {
    const sql = `insert into 
                ARTICLE (
                    ART_COM,
                ) 
                values (
                    "${nom}"
                )`;

    db.con.query(sql, (err) => {
        if (err) {
            throw err;
        }
    });
}

exports.getArticles = getArticles;
exports.getArticle = getArticle;
exports.addArticle = addArticle;
