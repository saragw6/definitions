const Router = require('express-promise-router');
const router = new Router();

const db_url = "postgres://cvbxymodwgcdog:6ca64c4362716069e239320eec8ae06097e66f573126ae33027e5e593fe663d2@ec2-54-243-235-153.compute-1.amazonaws.com:5432/d6i5mdoncrqtm0";
const { Client } = require('pg');

module.exports = router;

router.post('/:term/:synonym', async (req, res, next) => {
  const client = new Client({ connectionString: db_url, ssl: true });
  client.connect();

  const {term, synonym} = req.params;

  var queryString = 'INSERT INTO synonym(term, sort_as) VALUES ($1,$2) ON CONFLICT ON CONSTRAINT synonym_pkey DO NOTHING;';

  try {
    const { rows } = await client.query(queryString, [term, synonym]);
    res.send("added synonym: " + term + "\/" + synonym);
  } catch (err) {
    console.error(err.stack);
    res.status(500).send('Error while inserting synonym: ' + term + "\/" + synonym); //could make more specific
  }

  client.end();
});

router.get('/:term', async (req, res) => {
  const client = new Client({ connectionString: db_url, ssl: true });
  client.connect();

    var queryString = 'SELECT * FROM synonym WHERE term = $1';

    

});