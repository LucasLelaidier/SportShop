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
    magasinController.empty(db.testCon);
    chefDeMagasinController.empty(db.testCon);

    chefDeMagasinController.addChefDeMagasin(db.testCon, 'Lelaidier', 'Lucas', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', '');
    magasinController.addMagasin(db.testCon, 'Tours', '8 rue gaspard coriolis', 1);

    describe('/GET magasins', () => { // La suite de tests pour la route GET
        it('doit retourner la liste de tous les magasins de la base', (done) => {
            chai.request(server).get('/magasins').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });

    describe('/GET utilisateurs', () => { // La suite de tests pour la route GET
        it('doit retourner la liste de tous les utilisateurs de la base', (done) => {
            chai.request(server).get('/utilisateurs').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });
});

function initializeDatabase() {

}
