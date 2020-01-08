const express = require('express');

const route = express.Router();
const rayonMiddleware = require('../middlewares/rayonMiddleware');

module.exports = (app) => {
    app.use('/rayon', route);

    route.get('/', rayonMiddleware.getRayons, (req, res) => res.json(req.result));
    route.get('/:id', rayonMiddleware.getRayon, (req, res) => res.json(req.result));
    route.post('/', rayonMiddleware.addRayon);
};
