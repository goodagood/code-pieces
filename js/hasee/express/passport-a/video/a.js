
var ffmpeg = require('fluent-ffmpeg');

//var command = ffmpeg();

var command = ffmpeg('./sun.mp4').noAudio();


ffmpeg('./sun.mp4')
.on('filenames', function(filenames) {
    console.log('Will generate ' + filenames.join(', '))
})
.on('end', function() {
    console.log('Screenshots taken');
})
.screenshots({
    // Will take screens at 20%, 40%, 60% and 80% of the video
    count: 5,
    //folder: '/path/to/output'
    folder: './'
});





