const express = require('express');

const route = express.Router();
const magasinController = require('../../controller/magasinController');

module.exports = (app) => {
    app.use('/magasin', route);

    route.get('/', (req, res) => {
        magasinController.getMagasins().then((rows) => {
            res.json(rows);
        });
    });

    route.get('/:id', (req, res) => res.status(200).send({ status: req.params.id }));
};
