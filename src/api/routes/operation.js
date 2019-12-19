const express = require('express');

const route = express.Router();
const operationMiddleware = require('../middlewares/operationMiddleware');

module.exports = (app) => {
    app.use('/operation', route);

    route.get('/', operationMiddleware.getOperations, (req, res) => res.status(200).send(req.result));
    route.get('/:id', (req, res) => res.status(200).send({ status: req.params.id }));
};
