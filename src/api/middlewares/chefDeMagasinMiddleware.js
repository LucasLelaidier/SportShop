const chefDeMagasinController = require('../../controller/chefDeMagasinController');

// Gets all ... from database and put it in res.results
const getChefsDeMagasin = async (req, res, next) => {
    chefDeMagasinController.getChefsDeMagasin().then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

const getChefDeMagasin = async (req, res, next) => {
    chefDeMagasinController.getChefDeMagasin(req.params.id).then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

const addChefDeMagasin = async (req, res) => {
    try {
        chefDeMagasinController.addChefDeMagasin(req.body.nom, req.body.nom, req.body.password, req.body.pp);
        res.sendStatus(201);
    } catch (err) {
        res.sendStatus(404);
    }
};


exports.getChefsDeMagasin = getChefsDeMagasin;
exports.getChefDeMagasin = getChefDeMagasin;
exports.addChefDeMagasin = addChefDeMagasin;
