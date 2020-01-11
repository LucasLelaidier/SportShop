const express = require('express');
const { check } = require('express-validator');

const route = express.Router();
const rayonMiddleware = require('../middlewares/rayonMiddleware');
const validator = require('../middlewares/validator');

module.exports = (app) => {
    app.use('/rayon', route);

    const criteria = [
        check('nom').not().isEmpty(),

        check('cdrId').not().isEmpty(),
        check('cdrId').isInt(),

        check('magasinId').not().isEmpty(),
        check('magasinId').isInt(),
    ];

    route.get('/', rayonMiddleware.getRayons, (req, res) => res.json(req.result));
    route.get('/:id', rayonMiddleware.getRayon, (req, res) => res.json(req.result));
    route.post('/', criteria, validator.validate, rayonMiddleware.addRayon);
};
