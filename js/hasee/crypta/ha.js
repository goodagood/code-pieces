
var hfile = require('hash-files');
var ursa  = require('ursa');
var fs    = require('fs');

var p = console.log;


function test_a(){
    hfile(
            {
                files: ['./ua.js', './ub.js'],
                algorithm: 'sha256'
            },
            function(err, hash){
                if (err) p(err);
                p(hash);
            }
         );
}


var key_pem_file = '/home/za/tmp/keya.pem';
var key_pub_file = '/home/za/tmp/keya.pub';

var prikey = ursa.createPrivateKey(fs.readFileSync(key_pem_file));
var pubkey = ursa.createPublicKey( fs.readFileSync(key_pub_file));


/*
 * hash a file, then encrypt the string(hash).
 */
function aa(file_path){
    file_path = file_path || './ua.js';

    hfile({files: [file_path]}, function(err, hash){
        if(err) return p(err);

        var t = Date.now().toString();
        hash  = hash + t;

        var encrypted_hash = prikey.privateEncrypt(hash, 'utf8', 'base64');

        var decrypted_hash = pubkey.publicDecrypt(encrypted_hash, 'base64', 'utf8');
        p('hash');
        p(hash);
        p('encrypted_hash');
        p(encrypted_hash);
        p('decrypted_hash');
        p(decrypted_hash);
    });
}



//console.log('Encrypt with Private (called public)');
//var msg = prikey.privateEncrypt("Everything is going to be 200 OK", 'utf8', 'base64');
//console.log('encrypted', msg, '\n');
//
//console.log('Decrypt with Public (called private)');
//var back = pubkey.publicDecrypt(msg, 'base64', 'utf8');
//console.log('decrypted', back, '\n');

if(require.main === module){
    aa();
}



