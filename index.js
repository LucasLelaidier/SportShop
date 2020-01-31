const express = require('express');
const routes = require('./src/api/index.js');
require('dotenv').config();

const hostname = 'localhost';
const port = 8000;

// Launching server
const app = express();

// Add headers
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes());

const server = app.listen(port, hostname, () => {});

exports.router = routes;
module.exports = server;
