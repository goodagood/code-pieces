
/*
 *  Checking using file to save session
 */


var session   = require('express-session');
var FileStore = require('./fstore.js')(session);


//var prepare_session = session({
//    store: new FileStore({path: './store-file-session'}),
//    resave: false,
//    saveUninitialized: false,
//    secret: 'keyboard cat'
//})

function prepare_session_middle_ware(sdir, secrets){
    sdir = sdir || '/tmp';
    secrets = secrets || 'I-@m th2 Secr#t W0rds!';

    return session({
        store: new FileStore({path: sdir}),
        resave: false,
        saveUninitialized: false,
        secret: secrets
    });
}


module.exports.prepare_session_middle_ware = prepare_session_middle_ware;


//app.use(session({
//    store: new FileStore({path: './store-file-session'}),
//    resave: false,
//    saveUninitialized: false,
//    secret: 'keyboard cat'
//}));


if(require.main === module){
    prepare_session_middle_ware();
}
