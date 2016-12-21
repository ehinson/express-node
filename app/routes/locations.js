const express = require('express');
var router = express.Router();

router.get('/locations', function (req, res) {
  var data = req.app.get('appData');
  var photos = [];

  data.locations.forEach(function (item) {
    photos = photos.concat(item.images);

  });

  res.render('locations', {
    pageTitle: 'Locations',
    artwork: photos,
    pageID: 'locations',
    pageLocation: data.locations

  });
});

router.get('/locations/:locationid', function (req, res) {
  var data = req.app.get('appData');
  var photos = [];
  var pageLocation = [];

  data.locations.forEach(function (item) {
    if(item.shortname == req.params.locationid){
      photos = photos.concat(item.images);
      pageLocation.push(item);
    }



  });

  res.render('locations', {
    pageTitle: 'Locations',
    artwork: photos,
    pageID: 'location-detail',
    pageLocation:  pageLocation

  });
});

module.exports = router;
