const express = require('express');

const route = express.Router();
const chefDeRayonMiddleware = require('../middlewares/chefDeRayonMiddleware');

module.exports = (app) => {
    app.use('/chef-de-rayon', route);

    route.get('/', chefDeRayonMiddleware.getChefsDeRayon, (req, res) => res.json(req.result));
    route.get('/:id', chefDeRayonMiddleware.getChefDeRayon, (req, res) => res.json(req.result));
    route.post('/', chefDeRayonMiddleware.addChefDeRayon);
};
