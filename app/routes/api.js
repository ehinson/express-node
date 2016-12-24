const express = require('express');
var router = express.Router();
var feedbackData = require('../data/feedback.json');

// express deprecated res.json(status, obj): Use res.status(status).json(obj) instead app/routes/api.js:6:7

router.get('/api', function (req, res) {
  res.status(200).json(feedbackData);
});

module.exports  = router;
