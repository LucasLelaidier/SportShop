const operationController = require('../../controller/operationController');

// Gets all shops from database and put it in res.results
const getOperations = async (req, res, next) => {
    operationController.getOperations().then((rows, err) => {
        if (err) {
            res.sendStatus(404);
        } else {
            req.result = rows;
            next();
        }
    });
};

exports.getOperations = getOperations;
