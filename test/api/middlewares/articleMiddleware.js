/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

const sinon = require('sinon');

const httpMocks = require('node-mocks-http');
const middleware = require('../../../src/api/middlewares/articleMiddleware');

describe('Article middleware', () => {
    const reqAll = httpMocks.createRequest({
        method: 'GET',
        url: '/article',
    });
    const reqId = httpMocks.createRequest({
        method: 'GET',
        url: '/article',
        params: {
            id: 1,
        },
    });

    let res;
    let nextSpy;

    beforeEach(() => {
        res = httpMocks.createResponse();
        nextSpy = sinon.spy();
    });

    it('should call next function when called on get with no params', () => {
        middleware.getArticles(reqAll, res, nextSpy);
        nextSpy.calledOnce.should.be.true;
    });

    it('should add data to req.result when called on get with no params', () => {
        middleware.getArticles(reqAll, res, nextSpy);
        reqAll.should.have.property('result');
    });

    it('should call next function when called on get with no params', () => {
        middleware.getArticles(reqId, res, nextSpy);
        nextSpy.calledOnce.should.be.true;
    });

    it('should add data to req.result when called on get with no params', () => {
        middleware.getArticles(reqId, res, nextSpy);
        reqId.should.have.property('result');
    });
});
