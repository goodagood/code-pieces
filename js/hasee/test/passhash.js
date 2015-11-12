var password = require('password-hash-and-salt');

var p = console.log;
 
//var myuser = [];
var myuser = {};
 
//// Creating hash and salt 
//password('mysecret').hash(function(error, hash) {
//    if(error) throw new Error('Something went wrong!');
//
//    // Store hash (incl. algorithm, iterations, and salt) 
//    p('hash: ', hash); 
//    myuser.hash = hash;
//
//    // Verifying a hash 
//    password('hack').verifyAgainst(myuser.hash, function(error, verified) {
//        if(error) throw new Error('Something went wrong!');
//        if(!verified) {
//            console.log("Don't try! We got you!");
//        } else {
//            console.log("The secret is...");
//        }
//    });
//});


var salta = "abdiejadfkl9aew";

// Creating hash and salt 
password('mysecret').hash(salta, function(error, hash) {
    if(error) throw new Error('Something went wrong!');

    // Store hash (incl. algorithm, iterations, and salt) 
    p('hash: ', hash); 
    myuser.hash = hash;

    // Verifying a hash 
    password('mysecret').verifyAgainst(myuser.hash, function(error, verified) {
        if(error) throw new Error('Something went wrong!');
        if(!verified) {
            console.log("Don't try! We got you!");
        } else {
            console.log("The secret is...");
        }
    });
});

