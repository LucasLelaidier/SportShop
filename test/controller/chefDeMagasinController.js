/* eslint-disable no-undef */
const controller = require('../../src/controller/chefDeMagasinController');

describe('Chef de magasin controller', () => {
    it('getChefsDeMagasin should resolve a promise', (done) => {
        controller.getChefsDeMagasin().then(() => {
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getChefsDeMagasin should resolve a promise with a value', (done) => {
        controller.getChefsDeMagasin().then((rows) => {
            rows.should.not.be.an('undefined');
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getChefDeMagasin should resolve a promise if the parameter a valid value', (done) => {
        controller.getChefDeMagasin(1).then(() => {
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getChefDeMagasin should reject if the parameter is not a valid value', (done) => {
        controller.getChefDeMagasin(1.5).then(() => {
            done(new Error('This promise should not resolve'));
        }).catch(() => {
            done();
        });
    });

    it('getChefDeMagasin should resolve a promise with a value', (done) => {
        controller.getChefDeMagasin(1).then((rows) => {
            rows.should.not.be.an('undefined');
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });
});
