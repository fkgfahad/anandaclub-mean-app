const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  date: {type: Number, required: true},
  poster: {type: Number, required: true},
  post: {
    post: {type: String, required: false},
    image: {type: Object, required: false}
  },
  privacy: {type: Number, required: true},
  likes: {type: Array, required: true},
  comments: {type: Array, required: true}
});

module.exports = mongoose.model('Post', postSchema);
