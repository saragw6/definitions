#!/usr/bin/env node

const configFor = require('../db/config');
const connectionPool = require('../db/connectionPool');
const { createUser, createDb, createTables } = require('../db/manage');

function initialize(config) {
  createUser(config.user, config.pass);
  createDb(config.name);
  
  // We only try to start a connection pool after the db has been created
  const pool = connectionPool(config.connectionString, config.ssl);

  // We also close the pool so the script will end immediately
  return createTables(pool).then(() => pool.end());
}

initialize(configFor('development'))
  .then(initialize(configFor('test')))
  .catch(e => setImmediate(() => {throw e}));
