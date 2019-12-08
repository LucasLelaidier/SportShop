const express = require('express');

const route = express.Router();
const articleController = require('../../controller/articleController');

module.exports = (app) => {
    app.use('/article', route);

    route.get('/', (req, res) => {
        articleController.getArticles().then((rows) => {
            res.json(rows);
        });
    });
    route.get('/:id', (req, res) => res.status(200).send({ status: req.params.id }));
};
