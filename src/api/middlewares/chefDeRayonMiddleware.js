const chefDeRayonController = require('../../controller/chefDeRayonController');

// Gets all ... from database and put it in res.results
const getChefsDeRayon = async (req, res, next) => {
    chefDeRayonController.getChefsDeRayon().then((rows, err) => {
        if (err) {
            res.sendStatus(404);
        } else {
            req.result = rows;
            next();
        }
    });
};

exports.getChefsDeRayon = getChefsDeRayon;
