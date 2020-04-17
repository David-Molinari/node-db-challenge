const express = require('express');

const db = require('./db-config.js');

const router = express.Router();

router.post('/', (req, res) => {
    db('resources').insert(req.body)
    .then(ids => {
      const id = ids[0];
  
      db('resources')
        .where({ id })
        .first()
      .then(resource => {
        res.status(201).json(resource);
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

router.get('/', (req, res) => {
    db('resources')
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });


module.exports = router;