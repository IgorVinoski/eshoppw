const { Pool } = require('pg')

const isProduction = process.env.NODE_ENV === 'production'

let pool = null;
if (isProduction) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL, ssl: {
      rejectUnauthorized: false,
    }
  })
} else {
  pool = new Pool({
    user: 'postgres',
    host: 'stiltedly-sharp-garganey.data-1.use1.tembo.io',
    database: 'postgres',
    password: '6uey1amfdkSZ7O7j',
    port: 5432,
    ssl: {
      rejectUnauthorized: false,
    }
  })
}

module.exports = { pool }