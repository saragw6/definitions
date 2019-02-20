#!/usr/bin/env node

// Initialize development database
const config = require('../db/config')('development');
const { createUser, createDb, createTables } = require('../db/manage');

createUser(config.user, config.pass);
createDb(config.name);

// We only try to start a connection pool after the db has been created
const pool = require('../db');

// We also close the pool so the script will end immediately
createTables(pool).then(() => pool.end());

