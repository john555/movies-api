const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (request, response) => {
  return response.send('it works!!');
});

app.listen(port, () => {
  console.log(`Started server at http://127.0.0.1:${port}`);
})
