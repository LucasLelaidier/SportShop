const { check, validationResult } = require('express-validator');
const magasinController = require('./controller/magasinController');
const stockController = require('./controller/stockController');
const db = require('./dataBase');
// const auth = require('./auth.js');

function setRoutes(router) {
    router.route('/magasins')
        .all((req, res) => {
            magasinController.getMagasins(db.con).then((rows) => {
                res.json(rows);
            });
        });

    /* router.route('/utilisateur')
        .post([
            check('nom').not().isEmpty()
                .escape()
                .trim(),
            check('prenom').not().isEmpty()
                .trim()
                .escape(),
            check('profilPicture').not().isEmpty()
                .escape(),
            check('password').isLength({ min: 8 }),
        ],
        (req, res) => {
            try {
                auth.auth(req.header['x-access-token']);
            } catch (err) {
                res.status(401).send({ auth: false, message: 'No token provided.' });
                return;
            }

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
            } else {
                articleController.addCoach(req.body.nom, req.body.prenom, req.body.password, req.body.profilPicture);
                res.status(201).send('Created');
            }
        }); */

    router.route('/stock')
        .post([
            check('magasin').not().isEmpty()
                .escape()
                .trim(),
            check('article').not().isEmpty()
                .trim()
                .escape(),
            check('stock').not().isEmpty()
                .escape(),
        ],
        (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ errors: errors.array() });
            } else {
                stockController.setStock(db.con, req.body.magasin, req.body.article, req.body.stock, (result) => {
                    console.log(result);

                    if (result instanceof Error) {
                        res.status(400).send(`${result}`);
                    } else {
                        res.status(201).send('Stock edited');
                    }
                });
            }
        });
}

exports.setRoutes = setRoutes;
