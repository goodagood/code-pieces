
var session = require('express-session');
//var FileStore = require('./session-file-store/index.js')(session);
var FileSess = require('./file-session-copy');
var FileStore = FileSess(session);

var options = {
    path : './file-session-store'
}

console.log(FileSess);
console.log(FileStore);

//app.use(session({
//    store: new FileStore(options),
//    secret: 'keyboard cat'
//}));

