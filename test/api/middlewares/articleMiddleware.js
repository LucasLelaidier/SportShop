/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

const httpMocks = require('node-mocks-http');
const middleware = require('../../../src/api/middlewares/articleMiddleware');

describe('Article middleware', () => {
    const reqNoId = httpMocks.createRequest({
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

    beforeEach(() => {
        res = httpMocks.createResponse();
    });

    describe('getArticles', () => {
        it('should add data to req.result if no error occured', (done) => {
            middleware.getArticles(reqNoId, res, () => {
                reqNoId.should.have.property('result');
                done();
            });
        });
    });

    describe('getArticle', () => {
        it('should add data to req.result if a "id" param is given', (done) => {
            middleware.getArticle(reqId, res, () => {
                reqNoId.should.have.property('result');
                done();
            });
        });
    });
});
