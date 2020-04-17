const express = require('express');

const db = require('./db-config.js');

const router = express.Router();

router.post('/', (req, res) => {
    db('projects').insert(req.body)
    .then(ids => {
      const id = ids[0];
  
      db('projects')
        .where({ id })
        .first()
      .then(project => {
        res.status(201).json(project);
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

router.get('/', (req, res) => {
    db('projects')
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });


module.exports = router;