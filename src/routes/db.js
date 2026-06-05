const db = require('C:\\extrinsic-backend\\extrinsic-backend\\extrinsic-backend\\config\\db.js');

// Create a connection pool to manage database queries
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'extrinsic',
  password: 'exmotive', // Replace this with your actual password
  port: 5432,
});

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Database connection error:', err.stack);
  } else {
    console.log('✅ Connected to PostgreSQL Database successfully!');
  }
});

module.exports = pool;