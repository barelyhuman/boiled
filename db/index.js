const knex = require('knex');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile');

let db;

exports.setup = () => {
  try {
    if (db) {
      return db;
    }
    const configByEnv = config[env];
    db = knex(configByEnv);
    return db;
  } catch (err) {
    throw new Error('Failed to connect to the database, please check your connection');
  }
};
