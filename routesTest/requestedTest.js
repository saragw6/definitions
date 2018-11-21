require('mocha');
const { expect } = require('chai');
const request = require('request');

const requestedTest = () => {

    describe('Requested route', () => {

        let term = 'test124';

        it('POST: should request an entry', (done) => {
            request.post({
                url: `http://localhost:4000/requested/${term}`
            }, (error, response) => {
                expect(response.statusCode).to.equal(200);
                expect(response.body).to.equal(`added requested term: ${term}`);
                done();
            });
        });

        it('GET: should return requested entries', (done) => {
            request('http://localhost:4000/requested' , (error, response) => {
                expect(response.statusCode).to.equal(200);
                expect(response.body.includes(term)).to.equal(true);
                done();
            });
        });
    });

}

module.exports = requestedTest;
