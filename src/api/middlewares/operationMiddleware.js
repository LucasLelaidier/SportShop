const operationController = require('../../controller/operationController');

// Gets all shops from database and put it in res.results
const getOperations = async (req, res, next) => {
    operationController.getOperations().then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

const getOperation = async (req, res, next) => {
    operationController.getOperation(req.params.id).then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

const addOperation = async (req, res) => {
    operationController.addOperation(req.body.stock, req.body.date, req.body.article, req.body.rayon, req.body.type).then(() => {
        res.sendStatus(201);
    }).catch(() => {
        res.sendStatus(404);
    });
};

exports.getOperations = getOperations;
exports.getOperation = getOperation;
exports.addOperation = addOperation;
