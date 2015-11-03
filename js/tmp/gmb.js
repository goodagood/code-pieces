var gm = require('gm');
var im = gm.subClass({imageMagick:true});

var pica = "/tmp/dsc08880.jpg";
var picb = "/tmp/d8a.jpg";
var picc = "/tmp/d8b.jpg";

gm(pica)
.resize(353, 257)
.autoOrient()
.write(picc, function (err) {
    if(err) console.log(err);
    if (!err) console.log(' hooray! ');
});
