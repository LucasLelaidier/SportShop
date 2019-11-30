/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

const should = chai.should();

chai.use(chaiHttp);

describe('SportShop API', () => {
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
        it('doit retourner la liste de tous les magasins de la base', (done) => {
            chai.request(server).get('/utilisateurs').end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });
});
