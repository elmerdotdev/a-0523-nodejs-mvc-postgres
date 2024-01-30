// models/userModel.js

const { Client } = require('pg');

const connectToDatabase = async () => {
    const client = new Client({
        user: 'yourUsername',     // Replace with your PostgreSQL username
        host: 'localhost',
        database: 'yourDatabase', // Replace with your database name
        password: 'yourPassword', // Replace with your password
        port: 5432,               // Replace with your port, if different
    });

    await client.connect();
    return client;
};

module.exports = connectToDatabase;
