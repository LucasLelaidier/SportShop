const express = require('express');
const { check } = require('express-validator');

const route = express.Router();
const chefDeRayonMiddleware = require('../middlewares/chefDeRayonMiddleware');
const validator = require('../middlewares/validator');

module.exports = (app) => {
    app.use('/chef-de-rayon', route);

    const criteria = [
        check('nom').not().isEmpty(),
        check('nom').matches(/^[A-Za-z-]*$/),
        check('prenom').not().isEmpty(),
        check('prenom').matches(/^[A-Za-z-]*$/),
        check('password').not().isEmpty(),
        check('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, 'i'),
    ];

    route.get('/', chefDeRayonMiddleware.getChefsDeRayon, (req, res) => res.json(req.result));
    route.get('/:id', chefDeRayonMiddleware.getChefDeRayon, (req, res) => res.json(req.result));
    route.post('/', criteria, validator.validate, chefDeRayonMiddleware.addChefDeRayon);
};
