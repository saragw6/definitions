const db_url = process.env.DATABASE_URL;
console.log("DB url: " + db_url);

const { Pool } = require('pg');
//set up connection to db
const pool = new Pool({
    connectionString: db_url,
    ssl: true,
});

//client connect inside each endpoint instead?
module.exports = pool;