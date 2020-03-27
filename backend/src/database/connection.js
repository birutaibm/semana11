const knex = require('knex');
const configurations = require('../../knexfile');

const configuration = (process.env.NODE_ENV === 'test') ?
  configurations.test : configurations.development;

const connection = knex(configuration);

module.exports = connection;