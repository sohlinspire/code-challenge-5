var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var index = require('./routes/index.js');
var message = require('./routes/message.js');
var mongoose = require('mongoose');

app.use(bodyParser.json());

//route path and variable
app.use('/message', message);
app.use('/', index);

//mongoose
var databaseUrl = 'mongodb://localhost:27017/antares';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', function() {
  console.log('mongoose connected to : ', databaseUrl);
});

mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
});//mongoose ends here

//catch all bucket
app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function(req, res) {
  console.log('Listening on port', port);
});
