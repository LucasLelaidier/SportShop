/* eslint-disable no-undef */
const controller = require('../../src/controller/magasinController');

describe('Magasin controller', () => {
    it('getMagasins should resolve a promise', (done) => {
        controller.getMagasins().then(() => {
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getMagasins should resolve a promise with a value', (done) => {
        controller.getMagasins().then((rows) => {
            rows.should.not.be.an('undefined');
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getMagasin should resolve a promise if the parameter a valid value', (done) => {
        controller.getMagasin(1).then(() => {
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getMagasin should reject if the parameter is not a valid value', (done) => {
        controller.getMagasin(1.5).then(() => {
            done(new Error('This promise should not resolve'));
        }).catch(() => {
            done();
        });
    });

    it('getMagasin should resolve a promise with a value', (done) => {
        controller.getMagasin(1).then((rows) => {
            rows.should.not.be.an('undefined');
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });
});
