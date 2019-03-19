const Router = require('express-promise-router');
const router = new Router();
const db = require('../../db')
const unwrap = require('../../db/util')

module.exports = router;

router.get('/', async (req, res) => {

  let query = {
      text:'SELECT * FROM requested WHERE fulfilled=0',
      rowMode: 'array'
  };

    (async () => {
        const client = await db.connect();

        try {
            const result = await client.query(query);
            res.send(result.rows.map(term_array => {return term_array[0]}));
        } finally {
            client.release();
        }
    })().catch((err) => {
        res.status(500).send('Error while retrieving requested entries'); //could make more specific
        return console.error('Error executing query', err.stack);
    });

})

const updates = {
  accept: async function (term) {
    await db.query(
      `UPDATE requested SET action = 1 WHERE term = $1`,
      [term]
    )
    
    return { message: `Accepted term "${term}"` }
  },

  reject: async function (term) {
    await db.query(
      `UPDATE requested SET action = 3 WHERE term = $1`,
      [term]
    )
    
    return { message: `Rejected term "${term}" :(` }
  }
}

async function create (term) {
  await db.query(
    `INSERT INTO requested(term, fulfilled, action)
     SELECT CAST($1 AS VARCHAR),0,0
     WHERE NOT EXISTS (SELECT 1 FROM requested WHERE term = $1);`,
    [term]);

  return 'added requested term: ' + term
}

async function upsert (term, action, res) {
  const { rows } = await db.query('SELECT * FROM requested WHERE term=$1', [term])
  const alreadyExists = rows.length === 1
  const doAction = alreadyExists ? updates[action] : create
  
  if (doAction) {
    const result = await doAction(term)

    res.send(result)
  } else {
    res.status(400).send({ message: 'Invalid parameters' })
  }
}

router.post('/:term', async (req, res) => {
  const term = req.params.term
  const action = req.query.action

  try {
    await upsert(term, action, res)
  } catch (err) {
    res.status(500).send('Error while inserting requested term: ' + term); //could make more specific
  }
})
