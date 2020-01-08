/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
const sinon = require('sinon');

const httpMocks = require('node-mocks-http');
const isAuth = require('../../../src/api/middlewares/isAuth');

describe('Authentification checker', () => {
    const token = jwt.sign(
        { username: 'admin' },
        'qJGKvbR3GsXbc85g',
        { expiresIn: '24h' },
    );

    const reqOk = httpMocks.createRequest({
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const reqWrongJWT = httpMocks.createRequest({
        headers: {
            authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjdjMjY2OWNlLWFjYmYtNGU1OS04ZTZkLWI0MDUxZTk4N2FlNSIsImlhdCI6MTU3NjE2MTg1OCwiZXhwIjoxNTc2MTY1NDU4fQ.8xaUg8pNYMCF2tRksN6RXJsmFZTKWBWFhn2JxFvP28U',
        },
    });
    const reqNoJWT = httpMocks.createRequest();

    let res;
    let nextSpy;

    beforeEach(() => {
        res = httpMocks.createResponse();
        nextSpy = sinon.spy();
    });

    it('checkToken() should send a 401 status if http header does not contain any JWT', () => {
        isAuth.checkToken(reqNoJWT, res, nextSpy);
        nextSpy.calledOnce.should.be.false;
        res.statusCode.should.equal(401);
    });

    it('checkToken() should send a 401 status if http header does not contain a valid JWT', () => {
        isAuth.checkToken(reqWrongJWT, res, nextSpy);
        nextSpy.calledOnce.should.be.false;
        res.statusCode.should.equal(401);
    });

    it('checkToken() should not send any http response', () => {
        isAuth.checkToken(reqOk, res, nextSpy);
        nextSpy.calledOnce.should.be.true;
    });
});
