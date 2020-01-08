const db = require('../dataBase');


// Récupère tous les articles
function getArticles() {
    const sql = 'select * from article';

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
    const sql = `select * from article where art_id="${article}"`;

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
                    ART_NOM
                ) 
                values (
                    "${nom}"
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

exports.getArticle = getArticle;
exports.getArticles = getArticles;
exports.addArticle = addArticle;
