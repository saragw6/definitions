const Router = require('express-promise-router');
const router = new Router();
const pool = require('../db')

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

module.exports = router;

router.get('/', async (req, res, next) => {

  //var queryString = 'SELECT * FROM potential';
  let queryString = 'SELECT * FROM entry WHERE action = $1';
  let values = [4];

    (async () => {
        const client = await pool.connect();

        try {
            const result = await client.query(queryString, values);
            res.json(result.rows);
        } finally {
            client.release();
        }
    })().catch((err) => {
        res.status(500).send('Error while retrieving reported entries'); //could make more specific
        return console.error('Error executing query', err.stack);
    });

});

router.post('/', async (req, res) => {
  const {entryId, email, reason} = req.body
  const now = new Date()

  await pool.query(
    `INSERT INTO report(entry_id, email, reason, time_submited) VALUES($1,$2,$3,$4)`,
    [entryId, email, reason, now]
  )

  var entryQueryString = 'UPDATE entry SET action=$1, last_updated=$2 WHERE entry_id=$3'
  await pool.query(
    entryQueryString,
    [4, now, entryId]
  )

  res.json({success: true})
})
