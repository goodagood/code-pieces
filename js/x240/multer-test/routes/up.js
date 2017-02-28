var express = require('express');
var router = express.Router();

var multer = require("multer");
var u      = require("underscore");

var fs     = require('fs');
var util   = require('util');
var p      = console.log;

///* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});


var upload = multer({dest: '/tmp/'});


router.get('/a', function(req, res, next) {
  res.render('upa', { title: 'Express' });
});

router.post('/a', upload.single('file'), function (req, res, next) {

        p(1);
        p(u.keys(req).sort().join("\t"));
        p(u.keys(req.file));
        p(req.file);

        //fs.writeFile('/tmp/ma', JSON.stringify(req), 'utf-8')
        //fs.writeFile('/tmp/mb', JSON.stringify(req.file), 'utf-8')
        fs.writeFile('/tmp/ma', util.inspect(req), 'utf-8')
        fs.writeFile('/tmp/mb', util.inspect(req.file), 'utf-8')

        res.redirect('/up/a');
});


router.get('/b', function(req, res, next) {
  res.render('upb', { title: 'Express' });
});

router.post('/b', upload.array('bfiles'), function (req, res, next) {

        p(1);
        p(u.keys(req).sort().join("\t"));
        p(u.keys(req.files));
        p(req.files);

        //fs.writeFile('/tmp/ma', JSON.stringify(req), 'utf-8')
        //fs.writeFile('/tmp/mb', JSON.stringify(req.file), 'utf-8')
        fs.writeFile('/tmp/ma', util.inspect(req), 'utf-8')
        fs.writeFile('/tmp/mb', util.inspect(req.files), 'utf-8')

        res.redirect('/up/b');
});


module.exports = router;
