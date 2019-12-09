const express = require('express');

const route = express.Router();
const magasinMiddleware = require('../middlewares/magasinMiddleware');
const isAuth = require('../middlewares/isAuth');

module.exports = (app) => {
    app.use('/magasin', route);

    route.get('/', isAuth.checkToken, magasinMiddleware.getMagasins, (req, res) => res.json(req.result));

    route.get('/:id', (req, res) => res.status(200).send({ status: req.params.id }));
};
