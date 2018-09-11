const express = require('express');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;
const router = express.Router();
const User = require('../models/users');
const { error } = require('../config');

router.post('/', (request, response) => {
  const { 
    firstName, 
    lastName, 
    username, 
    password
  } = request.body;

  const user = new User({ 
    firstName, 
    lastName, 
    username, 
    passwordHash: password
  });

  user.save((err, user) => {
    if(err) {
      return response.status(400).send(error);
    }
    return response.status(201).send(user);
  })
});

router.post('/login', (request, response) => {
  const { username, password } = request.body;

  User.findOne({ username }).exec((err, user) => {
    if (err) {
      return response.status(400).send(error);
    }

    jwt.sign({ user }, secret, (err, token) => {
      if (err) {
        return response.status(400).send(error);
      }
      
      return response.status(201).send({
        user,
        token
      });
    })
  });
})

module.exports = router;
