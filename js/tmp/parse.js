
var fs = require('fs');

fs.readFile('./home-structure.json', function(err, data){
    var contents = JSON.parse(data);
    console.log(contents);
});
