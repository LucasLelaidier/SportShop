const express = require('express');

const route = express.Router();
const auth = require('../middlewares/auth');

module.exports = (app) => {
    app.use('/login', route);

    route.get('/', auth.authentify, (req, res) => res.json({ token: req.result }));

    route.get('/:id', (req, res) => res.status(200).send({ token: req.params.id }));
};
