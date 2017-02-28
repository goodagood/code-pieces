
var htmlparser = require("htmlparser2");
var fs         = require("fs");
var util       = require("util");

var p          = console.log;


var pattern    = /(["'])\s*gglocal\/.+["']/i;
var patternd   = /^"gglocal\/[^"]+"/i;
var patterns   = /^'gglocal\/[^']+'/i;


function testa(){
    fs.readFile('./a.html', 'utf-8', function(err, html){
        if(err){return p(err);}

        //p(html.slice(0,300));
        parser.parseChunk(html);
        parser.end();
    });
}

testa();
