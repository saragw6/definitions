const db_url = process.env.DATABASE_URL;

const { Pool } = require('pg');
//set up connection to db
const pool = new Pool({
    connectionString: db_url,
    ssl: true,
});

//client connect inside each endpoint instead?
module.exports = pool;