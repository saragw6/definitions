const Router = require('express-promise-router');
const router = new Router();
const pool = require('../db')

module.exports = router;

router.get('/', async (req, res) => {

  let query = {
      text:'SELECT * FROM requested WHERE fulfilled=0',
      rowMode: 'array'
  };

    pool.connect((err, client, release) => {
        if (err) return console.error('Error acquiring client', err.stack);

        client.query(query, (err, result) => {
            release();
            if (err) {
                res.status(500).send('Error while retrieving requested entries'); //could make more specific
                return console.error('Error executing query', err.stack);
            }
            console.log(result.rows);
            res.send(result.rows.map(term_array => {return term_array[0]}));
        })
    })
})






//TODO: make test db so can properly test this
router.post('/:term', async (req, res) => {

  let queryString = 'INSERT INTO requested(term, fulfilled) SELECT CAST($1 AS VARCHAR),0 WHERE NOT EXISTS (SELECT 1 FROM requested WHERE term = $1);';
  let values = [req.params.term];

  pool.connect((err, client, release) => {
    if (err) return console.error('Error acquiring client', err.stack);

    client.query(queryString, values, (err, result) => {
      release();
      if (err) {
        res.status(500).send('Error while inserting requested term: ' + values[0]); //could make more specific
          return console.error('Error executing query', err.stack);
      }
      console.log(result.rows);
      res.send("added requested term: " + values[0]);
    })
  })
})
