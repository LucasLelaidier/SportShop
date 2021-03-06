const articleController = require('../../controller/articleController');

// Gets all ... from database and put it in res.results
const getArticles = async (req, res, next) => {
    articleController.getArticles().then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

const getArticlesMagasin = async (req, res, next) => {
    articleController.getArticlesMagasin(req.params.id).then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

const getArticlesRayon = async (req, res, next) => {
    articleController.getArticlesRayon(req.params.id).then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

const getArticle = async (req, res, next) => {
    articleController.getArticle(req.params.id).then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

const addArticle = async (req, res) => {
    articleController.addArticle(req.body.nom).then(() => {
        res.sendStatus(201);
    }).catch(() => {
        res.sendStatus(422);
    });
};

exports.getArticles = getArticles;
exports.getArticle = getArticle;
exports.getArticlesRayon = getArticlesRayon;
exports.addArticle = addArticle;
exports.getArticlesMagasin = getArticlesMagasin;
