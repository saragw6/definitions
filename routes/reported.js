const Router = require('express-promise-router');
const router = new Router();

const db_url = process.env.DB_URL;
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