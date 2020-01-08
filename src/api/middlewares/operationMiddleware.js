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
    try {
        operationController.addOperation(req.body.type, req.body.valeur, req.body.articleId, req.body.rayonId);
        res.sendStatus(201);
    } catch (err) {
        res.sendStatus(404);
    }
};

exports.getOperations = getOperations;
exports.getOperation = getOperation;
exports.addOperation = addOperation;
