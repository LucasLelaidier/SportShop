const articleController = require('../../controller/articleController');

// Gets all ... from database and put it in res.results
const getArticles = async (req, res, next) => {
    articleController.getArticles().then((rows, err) => {
        if (err) {
            res.sendStatus(404);
        } else {
            req.result = rows;
            next();
        }
    });
};

exports.getArticles = getArticles;
