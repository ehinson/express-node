const express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var feedbackData = require('../data/feedback.json');

// express deprecated res.json(status, obj): Use res.status(status).json(obj) instead app/routes/api.js:6:7

router.get('/api', function (req, res) {
  res.status(200).json(feedbackData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.post('/api', function (req, res) {
  feedbackData.unshift(req.body);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf-8', function (err) {
    if(err){
      console.log(err);
    }
  });
  res.status(200).json(feedbackData);

});

router.delete('/api/:id', function (req, res) {
  feedbackData.splice(req.params.id, 1);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf-8', function (err) {
    if(err){
      console.log(err);
    }
  });
  res.status(200).json(feedbackData);

})

module.exports  = router;
