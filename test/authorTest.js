require('mocha');
const { expect } = require('chai');
const request = require('request');

const app = require('../index');
const TEST_PORT = 4000;
const startApp = () => app.listen(TEST_PORT);
const tearDown = () => app.listen().close();

describe('Authors route', () => {
    before(startApp);
    after(tearDown);

    it('should return no authors for an author that does not exist yet', (done) => {
        request('http://localhost:4000/authors/93294673' , (error, response) => {
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.equal('[]');
            done();
        });
    });

    it('should return no authors for an invalid author id', (done) => {
        request('http://localhost:4000/authors/m4' , (error, response) => {
            expect(response.statusCode).to.equal(500);
            expect(response.body).to.equal('Invalid author id');
            done();
        });
    });

    it('should return one author for a valid author id', (done) => {
        request('http://localhost:4000/authors/1' , (error, response) => {
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.equal('[{"name":"Ary Ruth","identity":"Afab nonbinary gay"}]');
            done();
        });
    });

});