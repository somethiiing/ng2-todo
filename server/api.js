const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const helpers = require('./helper');

let database = {
  'hello@wilsonyu.io': {
    username: 'hello@wilsonyu.io',
    password: 'lolpassword',
    notes: [{ title: 'hi', value: 'hello', color: 'blue' }]
  }
}

let notesArr = [{title: 'hi', value: 'hello', color: 'blue'}];

passport.use(new LocalStrategy(
  (username, password, cb) => {
    let user = Object.keys(database).find( elem => elem === username);
    if (!user) { return cb(null, false) };
    if (database[user].password !== password) { return cb(null, false) };
    return cb(null, database[user])
  }
));

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

router.post('/signup', (req, res) => {
  const username = req.body.email;
  const password = req.body.password;
  const searchRes = helpers.findUser(database, username);
  let result;
  if (searchRes) { result = {data: username, status: 'USEREXISTS' } }
  else {
    database[username] = {
      username: username,
      password: password,
      notes: []
    }
    // create jwt token stuff
    let token = jwt.sign({username:username}, 'secret');
    result = { token: token, data: username, status: 'SUCCESS' };
  }
  res.json(result);
});

router.post('./signin', (req, res) => {

});

module.exports = router;
