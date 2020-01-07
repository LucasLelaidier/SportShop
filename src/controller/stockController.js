const db = require('../dataBase');
const rayonController = require('./rayonController');
const articleController = require('./articleController');

function getStock(rayon, article) {
    const sql = `select APP_STOCK from appartient where RAY_ID = "${rayon}" and ART_ID = "${article}"`;
    return new Promise((resolve, reject) => {
        db.con.query(sql, (err, rows) => {
            if (err || rows.length === 0) {
                reject(new Error('no result found'));
            }
            resolve(rows);
        });
    });
}

function setStock(rayon, article, stock, callback) {
    rayonController.getRayon(rayon).then((rayonRs) => {
        articleController.getArticle(article).then((articleRs) => {
            this.getStock(rayonRs[0].RAY_ID, articleRs[0].ART_ID).then(() => {
                // Si l'article est déjà dans le magasin on édite le stock
                if (stock > 0) {
                    const sql = `update appartient set APP_STOCK = "${stock}" where RAY_ID = "${rayonRs[0].RAY_ID}" and ART_ID = "${articleRs[0].ART_ID}";`;
                    db.con.query(sql, (updateErr) => {
                        if (updateErr) {
                            callback(updateErr);
                        } else {
                            callback(0);
                        }
                    });
                }
            }).catch(() => {
                // Si l'article n'était pas dans déjà dans le magasin on créée le stock
                if (stock > 0) {
                    const sql = `insert into 
                                appartient (
                                    RAY_ID,
                                    ART_ID,
                                    APP_STOCK
                                ) 
                                values (
                                    "${rayonRs[0].RAY_ID}",
                                    "${articleRs[0].ART_ID}",
                                    "${stock}"
                                )`;
                    db.con.query(sql, (insertErr) => {
                        if (insertErr) {
                            callback(insertErr);
                        } else {
                            callback(0);
                        }
                    });
                }
            });
        }).catch(() => {
            console.log("erreur no magasin");
            callback(1);
        });
    }).catch(() => {
        console.log("erreur no rayon");
        callback(1);
    });
}

exports.getStock = getStock;
exports.setStock = setStock;
