const express = require('express');

const route = express.Router();
const magasinMiddleware = require('../middlewares/magasinMiddleware');

module.exports = (app) => {
    app.use('/magasin', route);

    route.get('/', magasinMiddleware.getMagasins, (req, res) => res.json(req.result));

    route.get('/:id', magasinMiddleware.getMagasin, (req, res) => res.json(req.result));
};
