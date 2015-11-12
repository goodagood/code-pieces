
/*
 * Using ursa, for private/public keys.
 * 2015 1023
 */

var fs   = require('fs');
var u    = require('underscore');
var ursa = require('ursa');


var p = console.log;


//p(u.keys(pkey).sort().join(" \t "));
//p(u.keys(pkey).sort());



// create a pair of keys (a private key contains both keys...)
var keys = ursa.generatePrivateKey();
console.log('keys:');
p(u.keys(keys).sort());

// reconstitute the private key from a base64 encoding
var privPem = keys.toPrivatePem('base64');
console.log('privPem:', privPem);

var priv = ursa.createPrivateKey(privPem, '', 'base64');
console.log('priv:', priv);

// make a public key, to be used for encryption
var pubPem = keys.toPublicPem('base64');
console.log('pubPem:', pubPem);

var pub = ursa.createPublicKey(pubPem, 'base64');
console.log('pub:', pub);

// encrypt, with the private key, then decrypt with the public
var data = new Buffer('hello world');
console.log('data:', data);
console.log('data toString:', data.toString());

var enc = pub.encrypt(data);
console.log('enc:', enc);

var unenc = priv.decrypt(enc);
console.log('unenc:', unenc);
console.log('unenc toString:', unenc.toString());

