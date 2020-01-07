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

const getArticle = async (req, res, next) => {
    articleController.getArticle(req.params.id).then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

exports.getArticles = getArticles;
exports.getArticle = getArticle;