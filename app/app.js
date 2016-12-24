const express = require('express');
const reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT  || 4000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.locals.siteTitle = "Single Page Node and Express App "
app.locals.data = dataFile;
app.locals.allLocations = dataFile.locations;


app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/locations'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));

var server = app.listen(app.get('port'), function () {
  console.log('Listening on Port ' + app.get('port'));
})

reload(server, app);
