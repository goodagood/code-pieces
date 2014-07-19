var http = require("http");
var fs   = require("fs");
var util = require("util");

var server = http.createServer(function(request, response) {
    fs.writeFile('/tmp/req.js', util.inspect(request));

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World\r\n");
    response.end();

    fs.writeFile('/tmp/res.js', util.inspect(response));
})

server.listen(5050);
