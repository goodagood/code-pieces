var express = require('express');
var router = express.Router();

var p = console.log;

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});


router.get('/ok', function(req, res) {
    p('session?: ', req.session);
    res.send('get /ok, respond with a something');
});

module.exports = router;
