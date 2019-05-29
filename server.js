var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');

var index = require('./server-routes/index');
var routes = require('./server-routes/routing.js');

var app = express();

var port = 9090;

//mongoose connection moved from routing to here
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.once('open', function() {
  console.log('connection has been made');
}).on('error', function(error) {
  console.log('connection error', error);
});

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
//app.use(express.static, path.join(__dirname, 'client'));

// //body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//allow access origin for all urls/ports/origins - remove corsOptions
var whitelist = ['http://localhost:8080'];

// you can black list the cors urls which request data from outside.
// currently only 8080 is allowed to request data from 9090
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};

app.use(cors(/*corsOptions*/));
app.use('/', index);
app.use('/api', routes);

app.listen(port, "0.0.0.0", function() {
  console.log('server started on '+port);
});

app.use('reload', require('reload'));