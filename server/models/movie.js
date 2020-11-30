const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  gendre: String,
  directorId: String,
}, {
  versionKey: false
});

module.exports = mongoose.model('Movie', movieSchema)