const express = require('express');
const reload = require('reload');
var app = express();
var dataFile = require('./data/data.json');
const io = require('socket.io')();

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
app.use(require('./routes/chat'));

var server = app.listen(app.get('port'), function () {
  console.log('Listening on Port ' + app.get('port'));
})

io.attach(server);

io.on('connection', function (socket) {
  console.log('User connected');
  socket.on('postMessage', function (data) {
    io.emit('updateMessages', data);
  })
  socket.on('disconnect', function () {
    console.log('User Disconnected');

  })

})

reload(server, app);
