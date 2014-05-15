/**
The setup for In the Know
Written by: Avi Bagla, Shailesh Tainwala
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

//Routes
var index = require('./routes/index');
var login = require('./routes/login');
var news = require('./routes/news')
var questions = require('./routes/questions')
//Follow route format above.


//Setting up the app itself
var app = express();


//Setting up Environments
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('pink unicorns are beautiful'));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//The routes
app.get('/', index.view);
app.get('/login', login.view);
app.get('/news/:id', news.viewNewsItem);
app.get('/add/:id', questions.createQuestion);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});