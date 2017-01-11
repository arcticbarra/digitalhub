var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');
var apiController = require('./controllers/apiController');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.get('/', function(req, res) {
  res.render('index');
});

mongoose.connect(config.getDbConnectionString());

apiController(app);

app.listen(port);
