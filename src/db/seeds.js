const { executeInSequence } = require('./util')

const insertAction = (id, title) =>({
  text: `INSERT INTO action(id,title) VALUES($1,$2)`, 
  values: [id, title]
})

const seedActions = db => db.query('SELECT COUNT(*) FROM action')
  .then(result => result.rows[0].count === '4'
    ? Promise.resolve()
    : executeInSequence(db, [
        insertAction(0, 'potential'),
        insertAction(1, 'accepted'),
        insertAction(2, 'reported'),
        insertAction(3, 'rejected')
    ])
  )

module.exports = {
  seedActions
}
