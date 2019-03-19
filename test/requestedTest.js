require('mocha');
const { expect } = require('chai');
const request = require('request');
const { post, get, requestNewTerm } = require('./requestHelper.js');
const db = require('../src/db')
const { unwrap } = require('../src/db/util')

const requestedTest = () => {
  describe('Requested route', () => {
    describe('POST /requested', () => {
      describe('creating a term', () => {
        it('responds with success', async () => {
	        const {statusCode, body} = await post('/requested/test124');
	        
	        expect(statusCode).to.equal(200);
	        expect(body).to.equal('added requested term: test124');
	      });

        it('should create a potential, unfulfilled requested term', async () => {
	        const {statusCode, body} = await post('/requested/test124');
	        
          const { rows } = await db.query('SELECT * FROM requested')
          expect(rows.length).to.equal(1)
          expect(rows[0]).to.eql({
            term: 'test124',
            action: 0,
            fulfilled: 0
          })
	      });
      })

      describe('updating a term', () => {
        beforeEach(async () => {
          const { statusCode } = await post('/requested/test124');
          expect(statusCode).to.equal(200)
        })

        describe('when no action query param is provided', () => {
          it('responds with failure', async () => {
            const { statusCode, body } = await post('/requested/test124', { json: true })
          
            expect(body).to.eql({
              message: 'Invalid parameters'
            })
            expect(statusCode).to.equal(400)
          })

          it('does not add a term', async () => {
            const initial = await unwrap(db, 'SELECT * FROM requested')
            expect(initial.length).to.equal(1)

            const { statusCode, body } = await post('/requested/test124')
            
            const final = await unwrap(db, 'SELECT * FROM requested')
            expect(final.length).to.equal(1)
          })

          it('does not change the existing term', async () => {
            const [ initialTerm ] = await unwrap(db, 'SELECT * FROM requested')
            
            const { statusCode, body } = await post('/requested/test124')
            
            const [ finalTerm ] = await unwrap(db, 'SELECT * FROM requested')
            expect(finalTerm).to.eql(initialTerm)
          })
        })

        describe('when the action is "accept"', () => {
          it('responds with success', async () => {
            const { statusCode, body } = await post('/requested/test124?action=accept', { json: true })

            expect(body).to.eql({
              message: 'Accepted term "test124"'
            })
            expect(statusCode).to.eql(200)
          })
        
          it('sets the action to accepted', async () => {
            const { statusCode, body } = await post('/requested/test124?action=accept', { json: true })

            const [ term ] = await unwrap(db, 'SELECT * FROM requested')
            expect(term.action).to.equal(1)
          })
        })

        describe('when the action is "reject"', () => {
          it('responds with success', async () => {
            const { statusCode, body } = await post('/requested/test124?action=reject', { json: true })

            expect(body).to.eql({
              message: 'Rejected term "test124" :('
            })
            expect(statusCode).to.eql(200)
          })
        
          it('sets the action to rejected', async () => {
            const { statusCode, body } = await post('/requested/test124?action=reject', { json: true })

            const [ term ] = await unwrap(db, 'SELECT * FROM requested')
            expect(term.action).to.equal(3)
          })
        })
      })
    })

    it('GET: should return requested entries', async () => {
	    await requestNewTerm('test124');

	    const {statusCode, body} = await get('/requested', { json: true });
      expect(statusCode).to.equal(200);
      expect(body).to.eql(['test124']);
    });
  });
}

module.exports = requestedTest;
