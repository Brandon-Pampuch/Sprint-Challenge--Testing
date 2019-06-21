const express = require('express');

const Games = require('../games/gamesModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ server: 'running' });
});

server.get('/games', (req, res) => {
  Games.getAll()
    .then(games => {
      res.status(200).json(games);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});




module.exports = server;