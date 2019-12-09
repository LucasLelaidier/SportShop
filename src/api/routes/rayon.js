const express = require('express');

const route = express.Router();

module.exports = (app) => {
    app.use('/rayon', route);

    route.get('/', (req, res) => res.status(200).send({ status: 'ok' }));
    route.get('/:id', (req, res) => res.status(200).send({ status: req.params.id }));
};
