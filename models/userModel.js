// models/userModel.js

const { Pool } = require('pg');

const pool = new Pool({
    user: 'testdbuser', // Replace with your postgres username
    host: 'localhost',
    database: 'testdb', // Replace with your database name
    password: '54321', // Replace with your database password
    port: 5432,
});

module.exports = pool;
