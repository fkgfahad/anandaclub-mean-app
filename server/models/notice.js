const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticeSchema = new Schema({
  date: {type: Number, required: true},
  notices: {type: Array, required: true}
});

module.exports = mongoose.model('Notice', noticeSchema);
