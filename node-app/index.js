const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({ url: 'redis://redis:6379' });

client.connect().catch(console.error);

app.get('/', async (req, res) => {
  await client.set('greeting', 'Hello from Redis!');
  const msg = await client.get('greeting');
  res.send(msg);
});

app.listen(3000, () => {
  console.log('Node app running on port 3000');
});
