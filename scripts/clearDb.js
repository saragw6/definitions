#!/usr/bin/env node

const { executeInSequence } = require('../db/util');
const pool = require('../db');

const queries = [
  'term',
  'synonym',
  'author',
  'action',
  'entry',
  'requested'
].map(tableName => `DROP TABLE IF EXISTS ${tableName} CASCADE;`);

executeInSequence(pool, queries)
  .then(() => pool.end());

