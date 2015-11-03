
var static = require('node-static');
var u    = require('underscore');
var http = require('http');

var port = 9876;

var g = {}, ga = [];

//var srv0 = http.createServer(function (req, res) {
//    g.req = req;
//    g.res = res;
//
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    console.log('ok');
//    res.end('okay');
//});
//
//srv0.listen(port);



//
// Create a node-static server to serve the current directory
//
var file = new static.Server('.', { cache: 7200, headers: {'X-Hello':'World!'} });

var sa = require('http').createServer(function (request, response) {
    file.serve(request, response, function (err, res) {
        g.err = err; g.res = res; g.request = request; g.response = response;
        ga.push(g);

        if (err) { // An error as occured
            console.error("> Error serving " + request.url + " - " + err.message);
            response.writeHead(err.status, err.headers);
            response.end();
        } else { // The file was served successfully
            console.log("> " + request.url + " - " + res.message);
        }
    });
});

sa.listen(8080);

console.log("> node-static is listening on http://127.0.0.1:8080");

