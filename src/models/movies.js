const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  posterImage: { type: String },
});

module.exports = mongoose.model('Movie', moviesSchema);
