const db_url = process.env.DATABASE_URL;
const ssl_setting = !db_url.startsWith("postgres://localhost")

const { Pool } = require('pg');
//set up connection to db
const pool = new Pool({
    connectionString: db_url,
    ssl: ssl_setting,
});

//client connect inside each endpoint instead?
module.exports = pool;