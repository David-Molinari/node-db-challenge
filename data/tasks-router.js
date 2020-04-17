const express = require('express');

const db = require('./db-config.js');

const router = express.Router();

router.post('/', (req, res) => {
    db('tasks').insert(req.body)
    .then(ids => {
      const id = ids[0];
  
      db('tasks')
        .where({ id })
        .first()
      .then(task => {
        res.status(201).json(task);
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  //.leftJoin('species as s', 's.id', 'a.species_id')
  //.select('a.id', 'a.animal_name', 's.species_name')

router.get('/', (req, res) => {
    db('tasks')
        .join('projects', 'projects.id', 'tasks.project_id')
        .select('tasks.id', 'tasks.task_description', 'tasks.task_notes', 'tasks.task_status', 'tasks.project_id', 'projects.project_name', 'projects.project_description')
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });


module.exports = router;