const stockController = require('../../controller/stockController');

// Gets all shops from database and put it in res.results
const getStock = async (req, res, next) => {
    stockController.getStock(req.params.rayon, req.params.article).then((rows, err) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

exports.getStock = getStock;
