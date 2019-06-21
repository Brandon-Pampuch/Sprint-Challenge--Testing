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

server.get('/games', (req, res) => {
  Games.getAll()
    .then(games => {
      res.status(200).json(games);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

const validate = function(req,res,next){
  if(req.body.title && req.body.genre){
      next()
  }else{
      res.status(422).json({message:"please enter all info"})
  }
}

server.post('/games', validate, (req, res) => {
  console.log(req.body)
Games.insert(req.body)
  .then(games => {
    res.status(200).json(games);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

module.exports = server;