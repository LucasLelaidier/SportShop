const express = require('express');

const route = express.Router();
const stockController = require('../../controller/stockController');

module.exports = (app) => {
    app.use('/stock', route);

    route.get('/', (req, res) => res.status(200).send({ status: 'ok' }));
    route.get('/:id', (req, res) => res.status(200).send({ status: req.params.id }));

    route.post('/', (req, res) => {
        stockController.setStock(req.body.magasin, req.body.article, req.body.stock, (result) => {
            console.log(result);

            if (result instanceof Error) {
                res.status(400).send(`${result}`);
            } else {
                res.status(201).send('Stock edited');
            }
        });
    });
};
