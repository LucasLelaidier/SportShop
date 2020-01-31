/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

const chai = require('chai');
const chaiJWT = require('chai-jwt');

chai.use(chaiJWT);

const AuthService = require('../../src/services/auth');

describe('AuthService', () => {
    it('getToken() should return null if provided password do not match the good one', (done) => {
        const authService = new AuthService();
        authService.getToken('admin', 'wrong').then((token) => {
            chai.expect(token).to.equal(null);
            done();
        });
    });

    it('getToken() should return null if provided username do not match the good one', (done) => {
        const authService = new AuthService();
        authService.getToken('wrong', 'password').then((token) => {
            chai.expect(token).to.equal(null);
            done();
        });
    });

    it('getToken() should return a Json Web Token if provided username and password are acceptable', (done) => {
        const authService = new AuthService();
        authService.getToken('Marlin', 'password').then((token) => {
            token.should.be.a.jwt;
            done();
        }).catch(() => {
            done(new Error('Impossible d\'authetifier cet utilisateur'));
        });
    });
});
