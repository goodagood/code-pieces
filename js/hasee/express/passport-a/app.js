var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.use(express.session({ secret: 'keyboard cat' }));

// file session:

//var session = require('express-session');
var session = require('./session-copy');
var FileStore = require('./file-session-copy')(session);

app.use(session({
    store: new FileStore({path: './store-file-session'}),
    resave: false,
    saveUninitialized: false,
    secret: 'keyboard cat'
}));


//var passport = require ('passport');
var passport = require ('./pp/name-pass.js').passport;
app.use(passport.initialize());
app.use(passport.session());


// Try to guess user languages, limited to English/Chinese.
var locale = require("locale");
var our_langs = ['en', 'zh'];  
app.use(locale(our_langs));
// tested at lang-test


var routes = require('./routes/index');
var users = require('./routes/users');
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.get('/langs-a', function(req, res){
    res.header("Content-Type", "text/plain");
    res.send(
        "You asked for: " + req.headers["accept-language"] + "\n" +
        "We support: " + our_langs + "\n" +
        "Our default is: " + locale.Locale["default"] + "\n" +
        "The best match is: " + req.locale + "\n"
        );
});

module.exports = app;
