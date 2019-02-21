require('mocha');
const { expect } = require('chai');
const request = require('request');

const authorTest = () => {

    describe('Authors route', () => {

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

        it('should return one author for a valid author id', async () => {
	    // TODO
	    const pool = require('../db');
	    await pool.query(`INSERT INTO author(name, identity)\
			      VALUES('Agender Al', 'ace')`);

	    const { promisify } = require('util');
	    const get = promisify(request.get);

            await get('http://localhost:4000/authors/1').then(response => {
                expect(response.statusCode).to.equal(200);
                expect(response.body).to.equal('[{"name":"Agender Al","identity":"ace"}]');
            });
        });

    });

}

module.exports = authorTest;
