#!/usr/bin/env node

const configFor = require('../server/db/config');
const connectionPool = require('../server/db/connectionPool');
const { createUser, createDb, createTables } = require('../server/db/manage');
const { addActionToRequested, addReportTable } = require('../server/db/migrations')
const { seedActions } = require('../server/db/seeds')
const { seedEntries } = require('../server/db/seedEntries')
const { entries } = require('../server/db/testEntries')

let envs = process.argv.slice(2);
if (envs.length === 0) {
  envs = ['development', 'test']
}

function initialize(config) {
  console.log(`Configuring DB ${config.name}`)

  createUser(config.user, config.pass);
  createDb(config.name);
  
  // We only try to start a connection pool after the db has been created
  const pool = connectionPool(config.connectionString, config.ssl);

  return createTables(pool)
    .then(() => console.log('Running Migrations...'))
    .then(() => addActionToRequested(pool)) .then(() => addReportTable(pool))

    .then(() => console.log('Running seeds...'))
    .then(() => seedActions(pool))
    .then(() => config.name === 'queerdev'
      ? seedEntries(pool, entries)
      : null)

    .then(() => console.log('Closing connection...'))
    .then(() => pool.end())
    .then(() => console.log('...done\n'))
    .catch(e => {
      console.log('ERROR while initializing database')
      console.log(e)
      process.exit(1)
    })
}

envs.reduce(
  (chain, env) => chain.then(() => initialize(configFor(env))),
  Promise.resolve()
)
