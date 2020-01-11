const express = require('express');
const routes = require('./src/api/index.js');
require('dotenv').config();

const hostname = 'localhost';
const port = 8000;

// Launching server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes());

const server = app.listen(port, hostname, () => {});

exports.router = routes;
module.exports = server;
