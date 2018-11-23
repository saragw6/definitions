const Router = require('express-promise-router');
const router = new Router();

const db_url = "postgres://cvbxymodwgcdog:6ca64c4362716069e239320eec8ae06097e66f573126ae33027e5e593fe663d2@ec2-54-243-235-153.compute-1.amazonaws.com:5432/d6i5mdoncrqtm0";
const { Client } = require('pg');

// var bodyParser = require('body-parser');
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({extended: true}));

module.exports = router;

router.get('/', async (req, res, next) => {
  const client = new Client({ connectionString: db_url, ssl: true });
  client.connect();

  //var queryString = 'SELECT * FROM potential';
  var queryString = 'SELECT * FROM entry WHERE action = 4';


  try {
    const { rows } = await client.query(queryString);
    res.json(rows);
    console.log(rows);
  } catch (err) {
    console.error(err.stack);
    res.status(500).send('Error while retrieving reported entries'); //could make more specific
  }

  client.end();

});