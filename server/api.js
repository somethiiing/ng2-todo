const express = require('express');
const router = express.Router();
let notesArr = [];

router.get('/', (req, res) => {
  res.send('api healthcheck 200');
});

router.get('/notes', (req, res) => {
  res.send(notesArr);
});

router.post('/notes', (req, res) => {
  notesArr.push(req.body);
  res.send(req.body);
});

router.delete('/notes', (req, res) => {
  res.send(200);
});

module.exports = router;