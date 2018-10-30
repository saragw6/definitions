require('mocha');
const { expect } = require('chai');
const request = require('request');

const requestedTest = () => {

    describe('Requested route', () => {

        it('GET: should return requested entries', (done) => {
            request('http://localhost:4000/requested' , (error, response) => {
                expect(response.statusCode).to.equal(200);
                //TODO: figure out response when item requested
                done();
            });
        });

        //TODO: Post route
        // it('POST: should request an entry', (done) => {
        //     let term = 'test';
        //     request.post({
        //         url: 'http:localhost/requested',
        //         form: { term: 'test' }
        //     });
        //     expect(response.statusCode).to.equal(200);
        //     expect(response.message).to.equal(`added requested term: ${term}`)
        // });

    });

}

module.exports = requestedTest;
