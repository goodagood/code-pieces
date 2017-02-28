
function aa(){
    read_str(null, function(err, str){
        eval(str);
        if(show_it_square) show_it_square();
    });

}


var fs = require('fs');
var path = require('path');
var p    = console.log;

function read_str(name, callback){
    name = name || 'ta.js';

    var abs_name = path.join(__dirname, name);

    p(abs_name);
    fs.readFile(name, 'utf-8',  function(err, str){
        p(err, str);
        callback(err, str);
    });


}

//read_str('ta.js');
aa();
//p('dir: ', dir());
