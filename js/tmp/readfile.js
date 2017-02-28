var fs = require('fs');


function a(){
    fs.readFile('/tmp/ls', function(err, buff){
        console.log(typeof buff);
        console.log(buff);
    });
}


function b(){
    fs.readFile('/tmp/ls', {encoding: 'utf8',}, function(err, buff){
        console.log(typeof buff);
        console.log(buff);
    });
}

function c(){
    fs.readFile('/tmp/ls', {encoding: 'utf-8',}, function(err, buff){
        console.log(typeof buff);
        console.log(buff);
    });
}

if(require.main === module){
    b();
}
