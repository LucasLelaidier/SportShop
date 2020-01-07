const express = require('express');

const route = express.Router();
const stockController = require('../../controller/stockController');
const stockMiddleware = require('../middlewares/stockMiddleware');

module.exports = (app) => {
    app.use('/stock', route);

    route.get('/:rayon/:article', stockMiddleware.getStock, (req, res) => res.status(200).send(req.result));

    route.post('/', (req, res) => {
        stockController.setStock(req.body.rayon, req.body.article, req.body.stock, (result) => {
            console.log(`result : ${result}`);
            if (result == 1) {
                res.status(400).send('an error occured');
            } else {
                res.status(201).send('Stock edited');
            }
        });
    });
};
