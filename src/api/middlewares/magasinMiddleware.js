const magasinController = require('../../controller/magasinController');

// Gets all shops from database and put it in res.results
const getMagasins = async (req, res, next) => {
    magasinController.getMagasins().then((rows, err) => {
        if (err) {
            res.sendStatus(404);
        } else {
            req.result = rows;
            next();
        }
    });
};

const getMagasin = async (req, res, next) => {
    magasinController.getMagasin(req.params.id).then((rows, err) => {
        if (err) {
            res.sendStatus(404);
        } else {
            req.result = rows;
            next();
        }
    });
};

exports.getMagasins = getMagasins;
exports.getMagasin = getMagasin;
