const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  messager: {type: Number, required: true},
  date: {type: Number, required: true},
  message: {type: String, required: true},
  image: {type: Object, required: false}
});

module.exports = mongoose.model('Message', messageSchema);
