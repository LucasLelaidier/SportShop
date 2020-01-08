const express = require('express');

const route = express.Router();
const chefDeMagasinMiddleware = require('../middlewares/chefDeMagasinMiddleware');

module.exports = (app) => {
    app.use('/chef-de-magasin', route);

    route.get('/', chefDeMagasinMiddleware.getChefsDeMagasin, (req, res) => res.json(req.result));
    route.get('/:id', chefDeMagasinMiddleware.getChefDeMagasin, (req, res) => res.json(req.result));
    route.post('/', chefDeMagasinMiddleware.addChefDeMagasin);
};
