const express = require('express');

const route = express.Router();
const auth = require('../middlewares/auth');
const isAuth = require('../middlewares/isAuth');

module.exports = (app) => {
    app.use('/login', route);

    route.get('/is-logged', isAuth.checkToken, (req, res) => res.json({ logged: true }));
    route.post('/', auth.authentify, (req, res) => res.json({ token: req.result }));
};
