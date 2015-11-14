
var htmlparser = require("htmlparser2");
var fs         = require("fs");

var p          = console.log;


var parser = new htmlparser.Parser(
        {
            onopentag: function(name, attribs){
                if(name === "script" && attribs.type === "text/javascript"){
                    console.log("JS! Hooray!");
                }else{
                    console.log("no script ");
                }
            },
            ontext: function(text){
                console.log("-->", text);
            },
            onclosetag: function(tagname){
                if(tagname === "script"){
                    console.log("That's it?!");
                }
            },
            onEnd: function(){
                p('ending', arguments);
            },
        },
        {decodeEntities: true});


//parser.write("Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>");
//parser.end();

function testa(){
    fs.readFile('./a.html', 'utf-8', function(err, html){
        if(err){return p(err);}

        //p(html.slice(0,300));
        parser.parseChunk(html);
        parser.end();
    });
}

testa();
