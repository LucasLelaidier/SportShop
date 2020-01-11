/* eslint-disable no-undef */

const chai = require('chai');
const chaiJWT = require('chai-jwt');

chai.use(chaiJWT);

const AuthService = require('../../src/services/auth');

describe('AuthService', () => {
    it('getToken() should return null if provided password do not match the good one', () => {
        const authService = new AuthService();
        chai.expect(authService.getToken('admin', 'wrong')).to.equal(null);
    });

    it('getToken() should return null if provided username do not match the good one', () => {
        const authService = new AuthService();
        chai.expect(authService.getToken('wrong', 'password')).to.equal(null);
    });

    it('getToken() should return a Json Web Token if provided username and password are acceptable', () => {
        const authService = new AuthService();
        // eslint-disable-next-line no-unused-expressions
        chai.expect(authService.getToken('admin', 'password')).to.be.a.jwt;
    });
});
