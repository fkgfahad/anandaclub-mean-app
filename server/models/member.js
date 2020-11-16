const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  id: {type: Number, required: true},
  username: {type: String, required: true},
  email: {type: String, required: false},
  address: {type: String, required: false},
  phone: {type: String, required: false},
  image: {
    profile: {type: Object, required: false},
    cover: {type: Object, required: false}
  },
  membertype: {type: String, required: true}
});

module.exports = mongoose.model('Member', memberSchema);
