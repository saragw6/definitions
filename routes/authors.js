const Router = require('express-promise-router');
const router = new Router();
const pool = require('../db')

module.exports = router;

router.get('/:id', async (req, res, next) => {
//return entries with author id or name and identity???

  if(Number.isInteger(Number(req.params.id)) === false) {
      return res.status(500).send('Invalid author id');
  }

  //get entries that match the term or synonyms
  let queryString = 'SELECT name, identity FROM author WHERE author_id = $1';
  let values = [req.params.id];

    pool.connect((err, client, release) => {
        if (err) return console.error('Error acquiring client', err.stack);

        client.query(queryString, values, (err, result) => {
            release();
            if (err) {
                res.status(500).send('Error while retrieving entries'); //could make more specific
                return console.error('Error executing query', err.stack);
            }
            console.log(result.rows);
            res.json(result.rows);
        })
    })
});