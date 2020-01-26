const express = require('express');
const { check } = require('express-validator');

const route = express.Router();
const articleMiddleware = require('../middlewares/articleMiddleware');
const validator = require('../middlewares/validator');

module.exports = (app) => {
    app.use('/article', route);

    const criteria = [
        check('nom').not().isEmpty(),
    ];

    route.get('/', articleMiddleware.getArticles, (req, res) => res.json(req.result));
    route.get('/magasin/:id', articleMiddleware.getArticlesMagasin, (req, res) => res.json(req.result));
    route.get('/rayon/:id', articleMiddleware.getArticlesRayon, (req, res) => res.json(req.result));
    route.get('/:id', articleMiddleware.getArticle, (req, res) => res.json(req.result));
    route.post('/', criteria, validator.validate, articleMiddleware.addArticle);
};
