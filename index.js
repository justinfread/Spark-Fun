// Create and use an express server
const express = require('express');
require('dotenv').config()
//const fetch = require('node-fetch');

const app = express();

app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

// Set up a rout to receive data from client 
app.post('/api', (request, response) => {
  console.log(request);
});