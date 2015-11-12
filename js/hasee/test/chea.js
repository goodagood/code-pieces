var request = require('request'),
    cheerio = require('cheerio');

function parse(url) {
    request(url, function (error, response, body) {
        var $ = cheerio.load(body);

        $('.question-summary .question-hyperlink').each(function () {
            console.info($(this).text());
        });
    });
}
//parse('http://stackoverflow.com/');


var html = "<html><head><title> oct.14 </title></head><body><p>hi</p> <div><p>hello</p></div></body></html>";

var $ = cheerio.load(html);

$('p').each(function () {
    console.info($(this).text());
});


