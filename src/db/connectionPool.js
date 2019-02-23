
function connectionPool(connectionString, ssl) {
  const { Pool } = require('pg');
  return new Pool({
    connectionString: connectionString,
    ssl: ssl
  });
}

module.exports = connectionPool;

