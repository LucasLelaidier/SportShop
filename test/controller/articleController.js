const controller = require('../../src/controller/articleController');

describe('Article controller', () => {
    it('getArticles should resolve a promise', (done) => {
        controller.getArticles().then(() => {
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    })

    it('getArticles should resolve a promise with a value', (done) => {
        controller.getArticles().then((rows) => {
            rows.should.not.be.an('undefined');
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    })

    it('getArticle should resolve a promise if the parameter a valid value', (done) => {
        controller.getArticle(1).then(() => {
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    })

    it('getArticle should reject if the parameter is not a valid value', (done) => {
        controller.getArticle(1.5).then(() => {
            done(new Error('This promise should not resolve'));
        }).catch(() => {
            done();
        });
    })

    it('getArticle should resolve a promise with a value', (done) => {
        controller.getArticle(1).then((rows) => {
            rows.should.not.be.an('undefined');
            done();
        }).catch(() => {
            done(new Error('This promise should resolve'));
        });
    })
});