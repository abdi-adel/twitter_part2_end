const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: {
    type: String,
    maxlength: [140, 'Tweet trop long'],
    minlength: [2, 'Tweet trop court'],
    required: [true, 'Champ requis']
  }
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;