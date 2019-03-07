var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

var index = require('./server-routes/index');
var tasks = require('./server-routes/tasks');

var app = express();

var port = 9090;

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
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(/*corsOptions*/));



app.use('/', index);
app.use('/api', tasks);

app.listen(port, "0.0.0.0", function() {
  console.log('server started on '+port);
})

app.use('reload', require('reload'))