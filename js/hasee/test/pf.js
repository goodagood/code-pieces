
var Promise  = require('bluebird');
var readFile = Promise.promisify(require("fs").readFile);

//var filename = '/tmp/man';
var filename = '/tmp/a.js';

readFile(filename, "utf8").then(function(contents) {
    return eval(contents);
    //console.log("The contents", contents);
    //return contents;
}).then(function(result) {
    console.log("The result of evaluating ", filename, ' is: ',  result);
}).catch(SyntaxError, function(e) {
    console.log("File had syntax error", e);
//Catch any other error
}).catch(function(e) {
    console.log("Error reading file", e);
});
