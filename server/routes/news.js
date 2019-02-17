const express = require('express');
const router = express.Router();
var mockNews = require('../mockNews.json');

router.get('/', (req, res, next) => res.json(mockNews));

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  if (id === 'error') {
    throw new Error("error occurs!");
  }
  if(!mockNews.articles[id]){
    res.status(404);
    res.send(`Resource with ${id} id is not found.`)
  }
  res.send(mockNews.articles[req.params.id]);
});

router.post('/', function (req, res, next) {  
  mockNews.articles.push(req.body);
  res.sendStatus(201);
});

router.put('/:id', function (req, res, next) {
  const id = req.params.id;
  if(!mockNews.articles[id]){
    res.status(404);
    res.send(`Resource with ${id} id is not found.`)
  }
  mockNews.articles[id] = req.body;
  res.sendStatus(204);
});

router.delete('/:id', function (req, res, next) {
  const id = req.params.id;
  if(!mockNews.articles[id]){
    res.status(404);
    res.send(`Resource with ${id} id is not found.`)
  }
  delete mockNews.articles[id]
  res.send(`${id} has been deleted.`);
});

module.exports = router;