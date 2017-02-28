var express = require('express');
var router = express.Router();

var util = require('util');
var p = console.log;

/* GET home page. */
router.get('/', function(req, res) {
    var t = new Date();
    res.render('index', { title: 'Express : ' + t.toString() });
});


router.get('/date', function(req, res) {
    var n = 'Preacher';
    var t = new Date();
    res.render('date', { name: n, date: t.toString() });
});

router.get('/mid'
        , mid
        , function(req, res) {
            var n = 'Preacher';
            var t = new Date();
            res.render('date', { name: n, date: t.toString() });
        });

function mid(req, res, next){
    p(req);
    p(res);
    flog(req);
    next();
}

var fs = require('fs');
function flog(obj){
    fs.appendFile('/tmp/flog'
            , "\n\n" + util.inspect(obj, {depth:null})
            , function(err, what){

            });
}

module.exports = router;
