const chefDeMagasinController = require('../../controller/chefDeMagasinController');

// Gets all ... from database and put it in res.results
const getChefsDeMagasin = async (req, res, next) => {
    chefDeMagasinController.getChefsDeMagasin().then((rows, err) => {
        if (err) {
            res.sendStatus(404);
        } else {
            req.result = rows;
            next();
        }
    });
};

const getChefDeMagasin = async (req, res, next) => {
    chefDeMagasinController.getChefDeMagasin(req.params.id).then((rows, err) => {
        if (err) {
            res.sendStatus(404);
        } else {
            req.result = rows;
            next();
        }
    });
};

exports.getChefsDeMagasin = getChefsDeMagasin;
exports.getChefDeMagasin = getChefDeMagasin;
