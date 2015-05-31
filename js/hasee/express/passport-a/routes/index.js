var express = require('express');
var router  = express.Router();


var fool = require ('../pp/fool.js');

//var pp      = require ('passport');
var pp_set      = require ('../pp/name-pass.js');
var pp = pp_set.passport;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// to test passport.js local login.
router.get('/login', function(req, res){
  res.render('login', { title: 'login test page' });
});

//router.post('/login', function(req, res){
//});

router.post('/login',
        pp.authenticate('local',
            { successRedirect: '/',
              failureRedirect: '/login',
                 failureFlash: true })  // should return a function fun(req, res, next)
);


var locale = require("locale");
router.get('/langs', function(req, res){
    res.header("Content-Type", "text/plain");
    res.send(
        "You asked for: " + req.headers["accept-language"] + "\n" +
        //"We support: " + supported + "\n" +
        "Our default is: " + locale.Locale["default"] + "\n" +
        "The best match is: " + req.locale + "\n"
        );
});


module.exports = router;
