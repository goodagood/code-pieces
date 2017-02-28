
var htmlparser = require("htmlparser2");
var fs         = require("fs");
var util       = require("util");

var p          = console.log;


var parser = new htmlparser.Parser(
        {
            onopentag: function(name, attribs){
                if(name === "script" && attribs.type === "text/javascript"){
                    console.log("JS! Hooray!");
                }else if(name === 'p'){
                    //console.log("a paraghraf");
                }else if(name === 'html'){
                    console.log("html, argu.");
                    console.log(util.inspect(arguments));
                }else{
                    //console.log("no script ");
                }
            },
            ontext: function(text){
                //console.log("-->", text);
            },
            //onclosetag: function(tagname){
            //    if(tagname === "script"){
            //        console.log("That's it?!");
            //    }
            //},
            //onprocessing
            onend: function(){
                p('ending', arguments);
            },
        },
        {decodeEntities: true});



function testa(){
    fs.readFile('./a.html', 'utf-8', function(err, html){
        if(err){return p(err);}

        //p(html.slice(0,300));
        parser.parseChunk(html);
        parser.end();
    });
}

testa();
