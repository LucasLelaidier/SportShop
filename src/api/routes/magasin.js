const express = require('express');
const { check } = require('express-validator');

const route = express.Router();
const magasinMiddleware = require('../middlewares/magasinMiddleware');
const validator = require('../middlewares/validator');

module.exports = (app) => {
    app.use('/magasin', route);

    const criteria = [
        check('ville').not().isEmpty(),
        check('adresse').not().isEmpty(),
        check('cdmId').not().isEmpty(),
    ];

    route.get('/', magasinMiddleware.getMagasins, (req, res) => res.json(req.result));
    route.get('/:id', magasinMiddleware.getMagasin, (req, res) => res.json(req.result));
    route.post('/', criteria, validator.validate, magasinMiddleware.addMagasin);
};
