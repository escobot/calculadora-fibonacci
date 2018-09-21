const keys = require('./keys');

// express
const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// pg
const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});
pgClient.on('error', () => console.log('Lost database connection'))

pgClient
    .query('CREATE TABLE IF NOT EXIST values (number INT)')
    .catch(err => console.log(err))

// redis
const redis = require('redis');
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});
const redistPublisher = redisClient.duplicate();
