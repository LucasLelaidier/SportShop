/* eslint-disable no-undef */
const controller = require('../../src/controller/chefDeRayonController');

describe('Chef de rayon controller', () => {
    it('getChefsDeRayon should resolve a promise', (done) => {
        controller.getChefsDeRayon().then(() => {
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getChefsDeRayon should resolve a promise with a value', (done) => {
        controller.getChefsDeRayon().then((rows) => {
            rows.should.not.be.an('undefined');
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getChefDeRayon should resolve a promise if the parameter a valid value', (done) => {
        controller.getChefDeRayon(1).then(() => {
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });

    it('getChefDeRayon should reject if the parameter is not a valid value', (done) => {
        controller.getChefDeRayon(1.5).then(() => {
            done(new Error('This promise should not resolve'));
        }).catch(() => {
            done();
        });
    });

    it('getChefDeRayon should resolve a promise with a value', (done) => {
        controller.getChefDeRayon(1).then((rows) => {
            rows.should.not.be.an('undefined');
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    });
});
