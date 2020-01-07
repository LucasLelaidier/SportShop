const chefDeRayonController = require('../../controller/chefDeRayonController');

// Gets all ... from database and put it in res.results
const getChefsDeRayon = async (req, res, next) => {
    chefDeRayonController.getChefsDeRayon().then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

const getChefDeRayon = async (req, res, next) => {
    chefDeRayonController.getChefDeRayon(req.params.id).then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

exports.getChefsDeRayon = getChefsDeRayon;
exports.getChefDeRayon = getChefDeRayon;
