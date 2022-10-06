const router = require('express').Router();
const api = require('./api');
const Tweet = require('../database/models/tweet.model');

router.use('/api', api);

router.get('/', (req, res) => {
  res.render('home', {tweets : null})
})

router.get('/showTweets', (req, res) => {
  Tweet.find({})
        .exec()
        .then( tweets => res.render('home', { tweets }) )
    ;
  });

  router.get('/tweet/new', (req, res) => {
    res.render('tweets/tweet-form', {errors : null});
  })
  
module.exports = router;