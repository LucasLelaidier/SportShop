/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

// Database
const db = require('../src/dataBase');
const magasinController = require('../src/controller/magasinController');
const chefDeMagasinController = require('../src/controller/chefDeMagasinController');
const stockController = require('../src/controller/stockController');

const should = chai.should();

chai.use(chaiHttp);

describe('SportShop API', () => {
    describe('/GET magasin', () => { // La suite de tests pour la route GET
        it('doit retourner la liste de tous les magasins de la base', (done) => {
            chai.request(server).get('/magasin').end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('/GET chef-de-magasin', () => {
        it('doit retourner la liste de tous les chefs de magasin de la base', (done) => {
            chai.request(server).get('/chef-de-magasin').end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('/GET chef-de-rayon', () => {
        it('doit retourner la liste de tous les chefs de rayon de la base', (done) => {
            chai.request(server).get('/chef-de-rayon').end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('/GET article', () => {
        it('doit retourner la liste de tous les articles de la base', (done) => {
            chai.request(server).get('/article').end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('/GET operation', () => {
        it('doit retourner la liste de toutes les operations de la base', (done) => {
            chai.request(server).get('/operation').end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('/GET rayon', () => {
        it('doit retourner la liste de tous les rayons de la base', (done) => {
            chai.request(server).get('/rayon').end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('/GET stock', () => {
        it('doit retourner la liste de tous les stocks de la base', (done) => {
            chai.request(server).get('/stock').end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });
});
