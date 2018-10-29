const Router = require('express-promise-router');
const router = new Router();

const db_url = process.env.DB_URL;
const { Client } = require('pg');

module.exports = router;

router.get('/:id', async (req, res, next) => {
//return entries with author id or name and identity???

  const client = new Client({ connectionString: db_url, ssl: true });
  client.connect();

  //get entries that match the term or synonyms
  var queryString = 'SELECT name, identity FROM author WHERE author_id = $1';
  //var authorQueryString = 'SLECT name, identity FROM author WHERE author_id = $1'

  try {
    const { rows } = await client.query(queryString, [req.params.id]);
    console.log(rows);
    res.json(rows);
  } catch (err) {
    console.error(err.stack);
    res.status(500).send('Error while retrieving entries'); //could make more specific
  }
  client.end();
});