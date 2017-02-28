
var c    = require('crypto');
var fs   = require('fs');
var path = require('path');

var u    = require('underscore');
var home = require('os-homedir');

var p  = console.log;
p(u.keys(c).sort().join(" \t "));

//console.log(c.getCiphers());

function read_key(fullpath, callback){
    fullpath = fullpath || path.join(home(), '.ssh/id_rsa');

    fs.readFile(fullpath, 'utf-8', function(err, key_string){
        if(err){
            p(err);
            return callback(err);
        }
        p(key_string);
        callback(null, key_string);
    });
}

function default_public_key(callback){
    var fullpath = path.join(home(), '.ssh/id_rsa.pub');
    read_key(fullpath, callback);
}

function default_private_key(callback){
    var fullpath = path.join(home(), '.ssh/id_rsa');
    read_key(fullpath, callback);
}

function crypt_de(){
    var text = 'this is going to be cipherred';
    var tbuf = new Buffer(text);

    default_public_key(function(err, pubstr){
        if(err) return p(1, err);
        var difficults = c.publicEncrypt(pubstr, tbuf);


        default_private_key(function(err, pristr){
            if(err) return p(2, err);
            var appear = c.privateDecrypt(pristr, tbuf);
            p(appear);
        });


    });

}

function crypt_de(){
    var text = 'this is going to be cipherred';
    var tbuf = new Buffer(text);

    default_public_key(function(err, pubstr){
        if(err) return p(1, err);
        var difficults = c.publicEncrypt(pubstr, tbuf);
        p('difficults: ', difficults);
    });
}


if(require.main === module){
    //read_key(null, function(){});
    crypt_de();
}

