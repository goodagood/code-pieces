
var passport            = require ('passport');
var LocalStrategy = require ('passport-local');

var u = require('underscore');
var assert = require('assert');

//var app = require ('../app.js');

var p = console.log;

//assert(u.isFunction(passport.use));
//assert(!u.isObject(LocalStrategy));
//console.log('here');
//console.log(LocalStrategy);


// try to hash and salt the password
var hashed = require("./bcry.js");
//hashed.prepare_db();  //comment out for others 2015 1102


//passport.use(new LocalStrategy
passport.use( new LocalStrategy(
    function(username, password, done){
        //check_passwd_1(username, password, done);
        hashed.check_passwd(username, password, done);
    }
));

var name_pass = {
    'aa' : 'aapass',
    'bb' : 'bbpass',
    'cc' : 'ccpass',
    'dd' : 'ddpass',
};

function check_passwd_1(name, password, done){

    var names = Object.keys(name_pass);

    //if(names.indexOf(name) < 0){ return done(new Error('no such user')); }
    if(names.indexOf(name) < 0){ return done(null, false, {message: 'no such user name'}); }
    if(name_pass[name] !== password) { return done(null, false, {message: 'passwd wrong'}); }

    return done(null, {
        'username': name,
        'id' : name,
        'name' : name
    });
}


function get_or_deserialize(name, done){
    if(typeof name_pass[name] !== 'undefined') done(null, {name: name, 'id':name});
}



passport.serializeUser(function(user, done) {
    //done(null, user.id);
    p( 'serializeUser got:\n', user,  Date.now());
    done(null, user);
});

passport.deserializeUser(function(id, done) {
    //User.findById(id, function (err, user) {
    //    done(err, user);
    //});
    p('in deserializeUser, id: ', id, Date.now());
    done(null, {id: id}); // do nothing
});
 


module.exports.passport = passport;







