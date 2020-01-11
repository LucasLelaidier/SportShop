const express = require('express');
const { check } = require('express-validator');

const route = express.Router();
const chefDeMagasinMiddleware = require('../middlewares/chefDeMagasinMiddleware');
const validator = require('../middlewares/validator');

module.exports = (app) => {
    app.use('/chef-de-magasin', route);

    const criteria = [
        check('nom').not().isEmpty(),
        check('prenom').not().isEmpty(),
        check('password').not().isEmpty(),
        check('password').isLength({ min: 8 }),
    ];

    route.get('/', chefDeMagasinMiddleware.getChefsDeMagasin, (req, res) => res.json(req.result));
    route.get('/:id', chefDeMagasinMiddleware.getChefDeMagasin, (req, res) => res.json(req.result));
    route.post('/', criteria, validator.validate, chefDeMagasinMiddleware.addChefDeMagasin);
};
