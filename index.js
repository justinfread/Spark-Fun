// Create and use an express server
const express = require('express');
require('dotenv').config()
//const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Starting server');
});

app.use(express.static('public')); // Host static files
app.use(express.json({limit: '1mb'})); // Allow json to be passed from client to server

// Set up a rout to receive data from client 
app.post('/api', (request, response) => {
  console.log(request);
});