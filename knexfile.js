require('dotenv').config()

module.exports = {


  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/g64-secrets',
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL

  },

};
