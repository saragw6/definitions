const Router = require('express-promise-router');
const router = new Router();
const pool = require('../db')

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

module.exports = router;

router.get('/', async (req, res, next) => {
  const reportedDefResults = await pool.query(
    `SELECT *
     FROM entry 
     INNER JOIN author ON entry.author = author.author_id
     WHERE action=4`
  )

  reportedDefsWithReason = await Promise.all(reportedDefResults.rows.map(async def => {
    const reports = await pool.query(
      'SELECT email, reason, time_submitted FROM report WHERE entry_id = $1',
      [def.entry_id]
    )

    return {
      ...def,
      reports: reports.rows
    }
  }))

  res.json(reportedDefsWithReason)
});

router.post('/', async (req, res) => {
  const {entryId, email, reason} = req.body
  const now = new Date()

  await pool.query(
    `INSERT INTO report(entry_id, email, reason, time_submitted) VALUES($1,$2,$3,$4)`,
    [entryId, email, reason, now]
  )

  var entryQueryString = 'UPDATE entry SET action=$1, last_updated=$2 WHERE entry_id=$3'
  await pool.query(
    entryQueryString,
    [4, now, entryId]
  )

  res.json({success: true})
})
