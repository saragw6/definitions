const Router = require('express-promise-router');
const router = new Router();

const db_url = "postgres://cvbxymodwgcdog:6ca64c4362716069e239320eec8ae06097e66f573126ae33027e5e593fe663d2@ec2-54-243-235-153.compute-1.amazonaws.com:5432/d6i5mdoncrqtm0";
const { Client } = require('pg');

module.exports = router;

router.get('/:id', async (req, res, next) => {
//return entries with author id or name and identity???

  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
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