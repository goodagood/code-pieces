var express = require('express');
var router = express.Router();

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

module.exports = router;
