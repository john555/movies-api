const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

  User.fin

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return response.status(400).send(error);
    }

    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        return response.status(400).send(error);
      }

      User.findOne({ username }).exec((err, user) => {
        if(err) {
          return response.status(400).send(error);
        }

        if(user) {
          error.message = 'Username already exists';
          return response.status(400).send(error);
        }

        const newUser = new User({ 
          firstName, 
          lastName, 
          username, 
          passwordHash: hash
        });
  
        newUser.save((err, user) => {
          if(err) {
            return response.status(400).send(error);
          }
  
          return response.status(201).send({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username
          });
        });
      });
    });
  });
  
});

router.post('/login', (request, response) => {
  const { username, password } = request.body;

  User.findOne({ username }).exec((err, user) => {
    if (err) {
      return response.status(400).send(error);
    }

    bcrypt.compare(password, user.passwordHash, (err, result) => {
      if (!result) {
        error.message = 'Invalid login credentials';
        return response.status(401).send(error);
      }

      jwt.sign({ user }, secret, (err, token) => {
        if (err) {
          return response.status(400).send(error);
        }
  
        return response.status(201).send({
          user: {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username
          },
          token,
        });
      })
    });
  });
})

module.exports = router;
