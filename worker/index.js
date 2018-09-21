 // keys houses hostname and port of redis
const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

// subscription
const sub = redisClient.duplicate();

 function fib(index) {
     if (index <2) return 1;
     return fib(index - 1) + fib(index - 2);
 }

 sub.on('message', (chan, message) => {
     redisClient.hset('values', fib(parseInt(message)));
 })

 sub.subscribe('insert');
 