
var marked = require('marked');
var fs     = require('fs');

var md_file = '/tmp/

//console.log(marked('I am using __markdown__.'));
// Outputs: <p>I am using <strong>markdown</strong>.</p>

//Example setting options with default values:
//
marked.setOptions({
    highlight : function(code){
        return require('highlight.js').highlightAuto(code).value;
    },

    //highlight : function(code, lang, callback){
    //    require('pygmentize-bundled')({lang:lang, format:'html'}, code, function(err, result){
    //        callback(err, result.toString());
    //    });
    //},

    renderer: new marked.Renderer(),

    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

//console.log(marked("I am using __markdown__, *oh*."));


fs.readFile('/tmp/r.md', {encoding:'utf-8',}, function(err, str){
    //console.log(err, str);
    var md = marked(str);
    fs.writeFile('/tmp/r.html', md);
    console.log(md);
});



