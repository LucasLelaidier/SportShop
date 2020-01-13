/* eslint-disable no-undef */
const controller = require('../../src/controller/operationController');

describe('Operation controller', () => {
    it('getOperations should resolve a promise', (done) => {
        controller.getOperations().then(() => {
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getOperations should resolve a promise with a value', (done) => {
        controller.getOperations().then((rows) => {
            rows.should.not.be.an('undefined');
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getOperation should resolve a promise if the parameter a valid value', (done) => {
        controller.getOperation(1).then(() => {
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getOperation should reject if the parameter is not a valid value', (done) => {
        controller.getOperation(1.5).then(() => {
            done(new Error('This promise should not resolve'));
        }).catch(() => {
            done();
        });
    });

    it('getOperation should resolve a promise with a value', (done) => {
        controller.getOperation(1).then((rows) => {
            rows.should.not.be.an('undefined');
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });
});
