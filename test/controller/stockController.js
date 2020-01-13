/* eslint-disable no-undef */
const controller = require('../../src/controller/stockController');

describe('Stock controller', () => {
    it('getStock should resolve a promise if the parameter is a valid value', (done) => {
        controller.getStock(1, 1).then(() => {
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getRayon should reject if the parameter is not a valid value', (done) => {
        controller.getStock(1, 1.5).then(() => {
            done(new Error('This promise should not resolve'));
        }).catch(() => {
            done();
        });
    });

    it('getRayon should resolve a promise with a value', (done) => {
        controller.getStock(1, 1).then((rows) => {
            rows.should.not.be.an('undefined');
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });
});
