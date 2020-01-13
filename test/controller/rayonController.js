/* eslint-disable no-undef */
const controller = require('../../src/controller/rayonController');

describe('Rayon controller', () => {
    it('getRayons should resolve a promise', (done) => {
        controller.getRayons().then(() => {
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getRayons should resolve a promise with a value', (done) => {
        controller.getRayons().then((rows) => {
            rows.should.not.be.an('undefined');
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getRayon should resolve a promise if the parameter a valid value', (done) => {
        controller.getRayon(1).then(() => {
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getRayon should reject if the parameter is not a valid value', (done) => {
        controller.getRayon(1.5).then(() => {
            done(new Error('This promise should not resolve'));
        }).catch(() => {
            done();
        });
    });

    it('getRayon should resolve a promise with a value', (done) => {
        controller.getRayon(1).then((rows) => {
            rows.should.not.be.an('undefined');
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });
});
