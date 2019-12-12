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
                res.should.have.status(401);
                done();
            });
        });
    });

    describe('/GET chef-de-magasin', () => {
        it('doit retourner la liste de tous les utilisateurs de la base', (done) => {
            chai.request(server).get('/chef-de-magasin').end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });
});
