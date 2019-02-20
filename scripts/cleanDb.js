#!/usr/bin/env node

// Clean up development database - tables
const config = require('../db/config')('development');
const { deleteUser, deleteDb, deleteTables } = require('../db/manage');

deleteDb(config.name);
deleteUser(config.user);

