const express = require('express');
const helmet = require('helmet');

// const NameRouter = require('./name-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => res.send('Hello world'))

// server.use('/api/name', NameRouter);

module.exports = server;