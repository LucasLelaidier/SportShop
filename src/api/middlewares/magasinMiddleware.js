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

const addMagasin = async (req, res) => {
    magasinController.addMagasin(req.body.ville, req.body.adresse, req.body.cdmId).then(() => {
        res.sendStatus(201);
    }).catch(() => {
        res.sendStatus(421);
    });
};

exports.getMagasins = getMagasins;
exports.getMagasin = getMagasin;
exports.addMagasin = addMagasin;
