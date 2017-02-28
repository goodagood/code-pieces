
/*
 * Use 'bcrypt' for password salted hashing
 *
 * user name and password/hash info in ./user-hash
 */


var fs = require('fs');
var bcrypt = require('bcrypt');

var p = console.log;

var filename = './user-hash';

var DB;

function prepare_db(callback){
    callback = callback || function(){};

    fs.readFile(filename, 'utf-8', function(err, text){
        if(err){
            p('fs.readFile err: ', err);
            return callback('fs.readFile err: ' + err);
        }

        var hash = JSON.parse(text);
        DB = hash;

        callback(null, DB);
    });
}


function check_pass(username, password, done){
    if(!DB) return done('db not ready');
    if(!DB[username]) return done('username not exists');

    p('DB[username]: ', DB[username]);
    var user_info = DB[username];
    var hash = user_info.hash;
    bcrypt.compare(password, hash, function(err, res) {
        p('828 compare .. ', err,  res);
        if(err) return done(err);

        if(!res) return done(null, false);

        done(null, user_info);
    });
}

function check_password(username, password, done){
    if(!DB){
        prepare_db(function(err){
            if(err) return done('db not ready');

            check_pass(username, password, done);
        });
    }else{
        check_pass(username, password, done);
    }
}



module.exports.check_pass = check_pass;
module.exports.check_password = check_password;


// checkings

function check_read_user_hash(){
    fs.readFile(filename, 'utf-8', function(err, text){
        if(err) return p('fs.readFile err: ', err);

        var hash = JSON.parse(text);
        DB = hash;

        p('got hash:');
        p(hash);

        bcrypt.compare(hash.tom.password, hash.tom.hash, function(err, res) {
            p('compare tom... ', err,  res);
            // res == false 
        });

    });
}


function prepare_db_and_check_password(username, password){
    username = username || 'aa';
    password = password || 'aapass';

    prepare_db(function(err){
        check_pass(username, password, function(err, what){
            p('check pass, err ', err);
            p(what);
        });
    });
}


if(require.main === module){
    p('yes');
    //make_hashes();
    //check_read_user_hash();
    prepare_db_and_check_password();
}
