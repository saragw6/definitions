const Router = require('express-promise-router');
const router = new Router();
const pool = require('../db')

module.exports = router;

router.get('/', async (req, res, next) => {

  //var queryString = 'SELECT * FROM potential';
  let queryString = 'SELECT * FROM entry WHERE action = $1';
  let values = [4];

    pool.connect((err, client, release) => {
        if (err) return console.error('Error acquiring client', err.stack);

        client.query(queryString, values, (err, result) => {
            release();
            if (err) {
                res.status(500).send('Error while retrieving reported entries'); //could make more specific
                return console.error('Error executing query', err.stack);
            }
            console.log(result.rows);
            res.json(result.rows);
        })
    })


});