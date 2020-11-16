const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {type: Number, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
  created: {type: Number, required: true},
});

module.exports = mongoose.model('User', userSchema);
