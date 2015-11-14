var bcrypt = require('bcrypt');

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

function test_b(){
    var password = "this-is-password";
    var salt_len = 10;  // long salt make it slow.

    bcrypt.hash(password, salt_len, function(err, hash) {
        p('auto gen: ', err, hash, "\n");

        bcrypt.compare(password, hash, function(err, res) {
            p("\nfirst:");
            p('should ok... ', err, res);
            p('res === true? ', res === true );
        });

        bcrypt.compare('not_password', hash, function(err, res) {
            p("\nsecond:");
            p('not... ', err,  res);
            p('res === true? ', res === true );
        });
    });
}

test_b();
