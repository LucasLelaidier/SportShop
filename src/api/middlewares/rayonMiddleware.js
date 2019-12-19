const rayonController = require('../../controller/rayonController');

// Gets all ... from database and put it in res.results
const getRayons = async (req, res, next) => {
    rayonController.getRayons().then((rows, err) => {
        if (err) {
            res.sendStatus(404);
        } else {
            req.result = rows;
            next();
        }
    });
};

const getRayon = async (req, res, next) => {
    rayonController.getRayon(req.params.id).then((rows, err) => {
        if (err) {
            res.sendStatus(404);
        } else {
            req.result = rows;
            next();
        }
    });
};

exports.getRayons = getRayons;
exports.getRayon = getRayon;
