const express = require('express');
const app = express();
const server = require('http').Server(app);

const ip = require('ip');

const port = process.env.PORT || 8080;

console.log(`Running! IP is ${ip.address()}:${port}`);

app.use(express.static('public'));

server.listen(port);