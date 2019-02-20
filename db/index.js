const env = process.env.NODE_ENV || 'development';
const config = require('./config')(env);

let connectionString;
if (process.env.DATABASE_URL) {
  connectionString = process.env.DATABASE_URL;
} else {
  connectionString = config.connectionString;
  // A lot of the app still uses this env variable directly,
  // so we set it manually to prevent everything breaking
  // while we mess around with db config
  process.env.DATABASE_URL = config.connectionString;
}

//set up connection to db
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: config.connectionString,
  ssl: config.ssl
});

//client connect inside each endpoint instead?
module.exports = pool;
