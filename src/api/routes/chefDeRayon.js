const express = require('express');

const route = express.Router();
const chefDeRayonMiddleware = require('../middlewares/chefDeRayonMiddleware');

module.exports = (app) => {
    app.use('/chef-de-rayon', route);

    route.get('/', chefDeRayonMiddleware.getChefsDeRayon, (req, res) => res.json(req.result));
    route.get('/:id', (req, res) => res.status(200).send({ status: req.params.id }));
};
