const Router = require('express-promise-router');
const router = new Router();

const db_url = "postgres://cvbxymodwgcdog:6ca64c4362716069e239320eec8ae06097e66f573126ae33027e5e593fe663d2@ec2-54-243-235-153.compute-1.amazonaws.com:5432/d6i5mdoncrqtm0";
const { Client } = require('pg');

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

module.exports = router;

router.get('/', async (req, res, next) => {
  const client = new Client({ connectionString: db_url, ssl: true });
  client.connect();

  var queryString = 'SELECT * FROM potential';

  try {
    const { rows } = await client.query(queryString);
    res.json(rows);
  } catch (err) {
    console.error(err.stack);
    res.status(500).send('Error while retrieving potential entries'); //could make more specific
  }

  client.end();

});

router.post('/', async (req, res) => {
  const client = new Client({ connectionString: db_url, ssl: true });
  client.connect();

  const {term, definition} = req.body;
  name = req.body.name ? req.body.name : '';
  identity = req.body.identity ? req.body.identity : '';
  explanation = req.body.explanation ? req.body.explanation : '';


  var queryString = 'INSERT INTO potential(term, definition, explanation, name, identity) SELECT CAST($1 AS VARCHAR),CAST($2 AS VARCHAR),CAST($3 AS VARCHAR),CAST($4 AS VARCHAR),CAST($5 AS VARCHAR) WHERE NOT EXISTS (SELECT 1 FROM potential WHERE term = $1 AND definition = $2 AND explanation = $3 AND name = $4 AND identity = $5);';

  try {
    await client.query(queryString, [term, definition, explanation, name, identity]);
    res.send("Inserted potential entry for term: " + term);
  } catch (err) {
    console.error(err.stack);
    res.status(500).send('Error while inserting potential entry'); //could make more specific
  }

  client.end();

});

router.delete('/:id', async (req, res) => {
  const client = new Client({ connectionString: db_url, ssl: true });
  client.connect();

  const { id } = req.params;
  var queryString = 'DELETE FROM potential WHERE potential_id = $1;';

  try {
    await client.query(queryString, [id]);
    res.send("Deleted potential entry by id: " + id);
  } catch (err) {
    console.error(err.stack);
    res.status(500).send('Error while deleting potential entry'); //could make more specific
  }

  client.end();

});