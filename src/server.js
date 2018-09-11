const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authorization = require('./middleware/authorization')

const movieRoutes = require('./routes/movieRoutes')

const port = process.env.PORT;
const secret = process.env.SECRET;
const databaseUrl = process.env.DATABASE_URL;
const dbConfig = { useNewUrlParser: true };
mongoose.connect(databaseUrl, dbConfig);

const app = express();
app.use(bodyParser.json());

// Add authorization middleware
app.use('*', authorization);

app.use('/movies', movieRoutes);

app.get('/', (request, response) => {
  return response.send('it works!!');
});

// Any other routes are designated 404
app.all('*', (request, response) => {
  return response.status(404).send({
    message: 'Invalid URL'
  });
});

app.listen(port, () => {
  console.log(`Started server at http://127.0.0.1:${port}`);
})
