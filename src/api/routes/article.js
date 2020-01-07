const express = require('express');

const route = express.Router();
const articleMiddleware = require('../middlewares/articleMiddleware');

module.exports = (app) => {
    app.use('/article', route);

    route.get('/', articleMiddleware.getArticles, (req, res) => res.json(req.result));
    route.get('/:id', articleMiddleware.getArticle, (req, res) => res.json(req.result));
};
