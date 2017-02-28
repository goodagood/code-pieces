/*
 * Convert local files accordingly to goodogood full path, that can be get as static.
 */

var cheerio = require('cheerio');

var fs      = require('fs');    
var path    = require('path');


var p = console.log;


function testa(){
    fs.readFile('./a.html', 'utf-8', function(err, html){
        if(err){return p(err);}

        var $ = cheerio.load(html);
        //$.find('a [href^="/gglocal/"]').each(function(){});
        //$('*[href~="/gglocal/"]').each(function(){});
        //$('a').each(function(){
        $('*[href]').each(function(){
            var href = $(this).attr('href');
            //p(href);
            //p(check_gglocal(href));
            if(check_gglocal(href)){
                var fpath = change_to_full_path(href, 'abc');
                p('fpath: ', fpath, "\n");
                //set it
                $(this).attr('href', fpath);
            }
        });

        $('*[src]').each(function(){
            var href = $(this).attr('src');
            p(href);
            //p(check_gglocal(href));
            if(check_gglocal(href)){
                var fpath = change_to_full_path(href, 'abc');
                p('fpath: ', fpath, "\n");
                //set it
                $(this).attr('src', fpath);
            }
        });

        var new_html = $.html();

        fs.writeFile('/tmp/new.html', new_html, 'utf-8', function(e,r){
            p('file written?', e, r);
        });

    });
}
testa();

var gglocal_pattern = /\/gglocal\//i;

function check_gglocal(href){
    var has = gglocal_pattern.test(href);
    //p('has: ', has);
    return has;
}


function change_to_full_path(href, cwd, prefix){
    if(!href) return;
    prefix = prefix || '/file/get';

    var origin = href.replace(gglocal_pattern, '');
    p('origin: ', origin);

    var cwded, full;
    if(cwd){
        cwded = path.join(cwd, origin);
        p('cwded: ', cwded);
    }
    cwded = cwded || origin;

    full = path.join(prefix, cwded);

    return full;

}


//origin:  static/css/normalize.css
//origin:  ../static/css/skeleton.css
//origin:  ./intro.html


