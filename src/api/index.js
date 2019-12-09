const express = require('express');
const article = require('./routes/article');
const chefDeMagasin = require('./routes/chefDeMagasin');
const chefDeRayon = require('./routes/chefDeRayon');
const magasin = require('./routes/magasin');
const operation = require('./routes/operation');
const rayon = require('./routes/rayon');
const stock = require('./routes/stock');
const login = require('./routes/login');

module.exports = () => {
    const app = express.Router();
    article(app);
    chefDeMagasin(app);
    chefDeRayon(app);
    magasin(app);
    operation(app);
    rayon(app);
    stock(app);
    login(app);

    return app;
};
