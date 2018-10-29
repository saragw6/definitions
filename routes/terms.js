const Router = require('express-promise-router');
const router = new Router();

const db_url = process.env.DB_URL;
const { Client } = require('pg');

module.exports = router;


//todo: no dups and lowercase
router.get('/', async (req, res) => {
  //res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  const client = new Client({ connectionString: db_url, ssl: true });
  client.connect();

  var query = {text:'SELECT * FROM term WHERE EXISTS (SELECT * FROM entry WHERE entry.term=term.term AND action=2)', rowMode: 'array'};

  try {
    const { rows } = await client.query(query);
    res.send(rows.map(term_array => {return term_array[0].toLowerCase()}));
  } catch (err) {
    console.log(err.stack);
  }

  client.end(); 
})

// router.post('/:term', async (req, res) => {
//   const client = new Client({ connectionString: db_url, ssl: true });
//   client.connect();

//   var term = req.params.term;

//   var queryString = 'INSERT INTO term(term) SELECT CAST($1 AS VARCHAR) WHERE NOT EXISTS (SELECT 1 FROM term WHERE term = $1);';

//   try {
//     const { rows } = await client.query(queryString, [term]);
//     res.send("added term: " + term);
//   } catch (err) {
//     console.error(err.stack);
//     res.status(500).send('Error while inserting term: ' + term); //could make more specific
//   }

//   client.end();
// })