const express = require('express');
const router = express.Router();
const Movie = require('../models/movies');
const { error } = require('../config');

router.get('/', (request, response) => {
  const offset = parseInt(request.query.offset) || 0;

  if (isNaN(offset)) {
    return response.status(400).send(error);
  }

  Movie.find().skip(offset).limit(8).exec((err, d) => {
    if (err) {
      return response.status(400).send(error);
    }
    return response.send(d);
  });
});

router.post('/', (request, response) => {
  if(!request.user) {
    error.message = 'Unauthorized';
    return response.status(401).send(error);
  }

  const { title, description, posterImage } = request.body;
  const movie = new Movie({ title, description, posterImage });

  movie.save((err, movie) => {
    if (err) {
      return response.status(400).send(error);
    }

    return response.status(201).send({
      data: movie,
    });
  });
});

module.exports = router;
