#!/usr/bin/env node

const { executeInSequence } = require('../db/util');
const pool = require('../db');

const queries = [
  'CREATE TABLE term(term VARCHAR (60) PRIMARY KEY);',
  'CREATE TABLE synonym( term VARCHAR (60) NOT NULL, sort_as VARCHAR (60) NOT NULL, PRIMARY KEY (term, sort_as));',
  'CREATE TABLE author( author_id SERIAL PRIMARY KEY, name VARCHAR (60), identity VARCHAR (3000));',
  'CREATE TABLE action(id SERIAL PRIMARY KEY, title VARCHAR(20));',
  'CREATE TABLE entry(entry_id serial PRIMARY KEY, term VARCHAR (60) NOT NULL REFERENCES term(term), definition VARCHAR (3000) NOT NULL, explanation VARCHAR (3000), author SERIAL REFERENCES author(author_id), action INTEGER NOT NULL REFERENCES action(id), time_submitted TIMESTAMPTZ, last_updated TIMESTAMPTZ);',
  'CREATE TABLE requested( term VARCHAR (60) PRIMARY KEY, fulfilled INTEGER NOT NULL);'
]

executeInSequence(pool, queries)
  .then(() => pool.end());

