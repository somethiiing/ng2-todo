const express = require('express');
const router = express.Router();
let notesArr = [{title: 'hi', value: 'hello', color: 'blue'}];

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
  const note = req.body;
  const index = notesArr.findIndex( elem => elem === note);
  const result = notesArr.splice(index, 1);
  res.send(result);
});

module.exports = router;