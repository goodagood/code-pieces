var fs = require('fs');
var md = require('markdown').markdown;

console.log( md.toHTML('hello *world*!'));

fs.readFile('markdown.md', {encoding:'utf8'}, function(err, text){
    //var html = md.toHTML(text);
    console.log( md.toHTML(text));
    //fs.writeFile('tmp.html', html);
});
