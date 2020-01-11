const express = require('express');
const { check } = require('express-validator');

const route = express.Router();
const operationMiddleware = require('../middlewares/operationMiddleware');
const validator = require('../middlewares/validator');

module.exports = (app) => {
    app.use('/operation', route);

    const criteria = [
        check('valeur').not().isEmpty(),
        check('date').not().isEmpty(),

        check('articleId').not().isEmpty(),
        check('articleId').isInt(),

        check('rayonId').not().isEmpty(),
        check('rayonId').isInt(),

        check('type').not().isEmpty(),
    ];


    route.get('/', operationMiddleware.getOperations, (req, res) => res.status(200).send(req.result));
    route.get('/:id', operationMiddleware.getOperation, (req, res) => res.status(200).send(req.result));
    route.post('/', criteria, validator.validate, operationMiddleware.addOperation);
};
