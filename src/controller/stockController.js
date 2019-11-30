const con = require('../dataBase');
const magasinController = require('./magasinController');
const articleController = require('./articleController');

function getStock(magasin, article) {
    const sql = `select sto_nombre from stock where mag_id="${magasin}" and art_id="${article}"`;

    return new Promise((resolve, reject) => {
        con.query(sql, (err, rows) => {
            if (err || rows.length === 0) {
                reject(new Error('no result found'));
            }
            resolve(rows);
        });
    });
}

function setStock(magasin, article, stock, callback) {
    magasinController.getMagasin(magasin).then((magasinRs) => {
        articleController.getArticle(article).then((articleRs) => {
            getStock(magasinRs[0].MAG_ID, articleRs[0].ART_ID).then(() => {
                // Si l'article est déjà dans le magasin on édit le stock
                if (stock > 0) {
                    const sql = `update stock set STO_NOMBRE = "${stock}" where MAG_ID = "${magasinRs[0].MAG_ID}" and ART_ID = "${articleRs[0].ART_ID}";`;
                    con.query(sql, (updateErr) => {
                        if (updateErr) {
                            callback(updateErr);
                        } else {
                            callback(0);
                        }
                    });
                }
            }).catch(() => {
                // Si l'article n'était pas dans déja dans le magasin on créée le stock
                if (stock > 0) {
                    const sql = `insert into 
                                stock (
                                    MAG_ID,
                                    ART_ID,
                                    STO_NOMBRE
                                ) 
                                values (
                                    "${magasinRs[0].MAG_ID}",
                                    "${articleRs[0].ART_ID}",
                                    "${stock}"
                                )`;
                    con.query(sql, (insertErr) => {
                        if (insertErr) {
                            callback(insertErr);
                        } else {
                            callback(0);
                        }
                    });
                }
            });
        }).catch(callback(new Error('Cet article n\'existe pas.')));
    }).catch(callback(new Error('Ce magasin n\'existe pas')));
}

exports.setStock = setStock;
