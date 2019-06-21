const knex = require('knex');
const config = require('../knexfile.js');

const environment = process.env.DB_ENV || 'development'; //make sure to change this to hit the testing db

module.exports = knex(config[environment]);