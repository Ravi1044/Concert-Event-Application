import knex from 'knex';
import knexConfig from './knexfile.js';
import dotenv from 'dotenv';
dotenv.config({path: './.env'});

const environment = process.env.NODE_ENV || 'development';
const db = knex(knexConfig[environment]);

// Test DB connection
(async () => {
  try {
    if (environment === 'development') {
      await db.raw('select 1+1 as result');
      console.log('Database connection successful in development mode');
    } else {
      await db.raw('SELECT 1+1 AS result');
      console.log('Database connection successful');
    }
  } catch (error) {
    console.error('Database connection failled:', error.message);
    process.exit(1);
  }
})();

export default db;
