const rayonController = require('../../controller/rayonController');

// Gets all ... from database and put it in res.results
const getRayons = async (req, res, next) => {
    rayonController.getRayons().then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

const getRayon = async (req, res, next) => {
    rayonController.getRayon(req.params.id).then((rows) => {
        req.result = rows;
        next();
    }).catch(() => {
        res.sendStatus(404);
    });
};

exports.getRayons = getRayons;
exports.getRayon = getRayon;
