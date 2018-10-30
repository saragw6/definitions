require('mocha');
const { expect } = require('chai');
const request = require('request');

// const app = require('../index');
// const TEST_PORT = 4000;
// const startApp = () => app.listen(TEST_PORT);
// const tearDown = () => app.listen().close();

describe('Reported route', () => {
    // before(startApp);
    // after(tearDown);

    it('should return all currently reported entries', (done) => {
        request('http://localhost:4000/reported' , (error, response) => {
            expect(response.statusCode).to.equal(200);
            //expect(response.body).to.equal('[]');
            done();
        });
    });

});