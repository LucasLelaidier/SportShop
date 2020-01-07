const magasinController = require('../../controller/magasinController');

// Gets all shops from database and put it in res.results
const getMagasins = async (req, res, next) => {
    magasinController.getMagasins().then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

const getMagasin = async (req, res, next) => {
    magasinController.getMagasin(req.params.id).then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

exports.getMagasins = getMagasins;
exports.getMagasin = getMagasin;
