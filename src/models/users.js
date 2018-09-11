const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, unique: true },
  passwordHash: { type: String },
});

module.exports = mongoose.model('User', usersSchema);
