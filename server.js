var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes2 = require('./app/routes/api2.js')(router);
var appRoutes = require('./app/routes/api.js')(router);
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));
app.use('/api2', appRoutes2);
app.use('/api', appRoutes);


// mongoose.connect('mongodb://localhost:27017/lh', function(err){
mongoose.connect('mongodb://admin:admin@ds149278.mlab.com:49278/livinghouse', function(err){
  if (err) {
    console.log('Not connected to de database: '+ err);
  }else {
    console.log('Successfully conected to MongoDB');
  }
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'))
})

app.listen(port, function(){
  console.log('Running server port: '+port);
});
