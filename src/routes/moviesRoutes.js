const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  return response.send('GET movies')
});

router.post('/', (request, response) => {
  return response.send('POST movies');
});

module.exports = router;
