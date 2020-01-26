const express = require('express');
const { check } = require('express-validator');

const route = express.Router();
const operationMiddleware = require('../middlewares/operationMiddleware');
const validator = require('../middlewares/validator');

module.exports = (app) => {
    app.use('/operation', route);

    const criteria = [
        check('stock').not().isEmpty(),
        check('stock').isInt(),
        check('date').not().isEmpty(),
        // check('date').matches('^\\d\\d\\d\\d-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\\d|3[0-1])\\s([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$'),
        check('article').not().isEmpty(),
        check('article').isInt(),

        check('rayon').not().isEmpty(),
        check('rayon').isInt(),

        check('type').not().isEmpty(),
        check('type').isInt(),
    ];


    route.get('/', operationMiddleware.getOperations, (req, res) => res.status(200).send(req.result));
    route.get('/:id', operationMiddleware.getOperation, (req, res) => res.status(200).send(req.result));
    route.post('/', criteria, validator.validate, operationMiddleware.addOperation);
};
