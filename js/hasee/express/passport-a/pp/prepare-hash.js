

var bcrypt = require('bcrypt');
var u      = require('underscore');
var async  = require('async');

var p = console.log;

var store = {};

function test_a(){
    bcrypt.genSalt(10, function(err, salt) {
        p('bcrypt.gensalt 10 ', err, salt);
        bcrypt.hash('B4c0/\/', salt, function(err, hash) {
            // Store hash in your password DB. 
            p('first gen: ', err, hash);
            store.hash = hash;

            // Then after a while, let's check password
            // Load hash from your password DB. 
            p('store.hash: ', store.hash);
            bcrypt.compare('B4c0/\/', store.hash, function(err, res) {
                p('B... ', err, res);
                // res == true 
                //p('B...', res);
            });

            bcrypt.compare('not_bacon', store.hash, function(err, res) {
                p('not... ', err,  res);
                // res == false 
                //p('not... ', res);
            });

        });
    });
}



//Auto-gen a salt and hash:


function hash_password(password, salt_len, callback){
    password = password || "this-is-password";
    salt_len = salt_len || 8;  // long salt make it slow.

    bcrypt.hash(password, salt_len, callback);
}

var sample = [
        {
            name: 'user-one',
            password: 'user-one-pass'
        },
        {
            name: 'two',
            password: 'user-one-pass'
        },
        {
            name: 'three',
            password: 'user-3-pass'
        },
        {
            name: 'tom',
            password: 'iamtom'
        },
        {
            name:'aa',
            password: 'aapass',
        },

        {
            name:'bb',
            password: 'bbpass',
        },
        {
            name:'cc',
            password: 'ccpass',
        },
        {
            name:'dd',
            password: 'ddpass',
        },
    ];

function make_hashes(users){
    users = users || sample;
    async.each(users, function(one, callback){
        hash_password(one.password, 8, function(err, hash){
            if(err) return callback(err);
            one.hash = hash;
            callback(null, one.hash);
        });
    },
    function(err, callback){
        p('async end', err, callback);
        p('users: ', users);
        write_user_hash(users, function(err, what){
            p('wrote? ', err, what);
        });
    });
}

var fs = require('fs');
var filename = './user-hash';
function write_user_hash(users, callback){
    var dict = {};
    u.each(users, function(one){
        one['id'] = one.name;
        dict[one.name] = one;
    });

    fs.writeFile(filename, JSON.stringify(dict), 'utf-8', callback);
}

function read_user_hash(){
    fs.readFile(filename, 'utf-8', function(err, text){
        if(err) return p('fs.readFile err: ', err);

        var hash = JSON.parse(text);
        p('got hash:');
        p(hash);


        bcrypt.compare(hash.tom.password, hash.tom.hash, function(err, res) {
            p('compare tom... ', err,  res);
            // res == false 
        });

    });
}

if(require.main === module){
    p('yes');
    make_hashes();
    //read_user_hash();
}
