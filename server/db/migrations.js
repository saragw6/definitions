
const addActionToRequested = db => db.query(
  `ALTER TABLE requested
   ADD COLUMN action INTEGER NOT NULL REFERENCES action(id)`
).catch(e => {
  console.log('caught an error e ' + e)
  // ignore the error when we have already run the migration successfully
  if (e.message !== 'column "action" of relation "requested" already exists') {
    throw e
  } 
})

const addReportTable = db => db.query(
  `CREATE TABLE IF NOT EXISTS report(
    id SERIAL PRIMARY KEY,
    entry_id SERIAL NOT NULL REFERENCES entry(entry_id),
    email VARCHAR (50) NOT NULL,
    reason VARCHAR (3000) NOT NULL,
    time_submitted TIMESTAMPTZ
  );`
)

module.exports = {
  addActionToRequested,
  addReportTable
}
