const express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var data = req.app.get('appData');
  var photos = [];

  data.locations.forEach(function (item) {
    photos = photos.concat(item.images);

  })

  res.render('index', {
    pageTitle: 'Home',
    artwork: photos,
    pageID: 'home',
    pageLocation: data.locations

  });
});

module.exports  = router;
