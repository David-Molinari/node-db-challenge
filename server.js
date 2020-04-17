const express = require('express');
const helmet = require('helmet');

const ProjectsRouter = require('./data/projects-router.js');
const ResourcesRouter = require('./data/resources-router.js');
const TasksRouter = require('./data/tasks-router.js');


const server = express();

server.use(helmet());
server.use(express.json());

// server.get('/', (req, res) => res.send('Hello world'))

server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);

module.exports = server;