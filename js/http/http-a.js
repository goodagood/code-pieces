
var u    = require('underscore');
var http = require('http');

var port = 9876;

var g = {};

var srv0 = http.createServer(function (req, res) {
    g.req = req;
    g.res = res;

    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('ok');
    res.end('okay');
});

srv0.listen(port);

