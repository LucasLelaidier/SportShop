const express = require('express');
const routes = require('./src/routes');
require('dotenv').config();

const hostname = 'localhost';
const port = 8000;

// Setting up routes
const router = express.Router();
routes.setRoutes(router);

// Launching server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const server = app.listen(port, hostname, () => {
    console.log(`Mon serveur fonctionne sur http://${hostname}:${port}\n`);
});

exports.router = router;
module.exports = server;
