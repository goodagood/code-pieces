
// encode image to base64 string, then restore it.

var fs = require('fs');

var imga = '/home/za/tmp/tmp/jpg/60.jpg';
var image_original = '/home/za/tmp/tmp/jpg/60.jpg';

//fs.readFile(imga, function(err, data){
//    console.log(typeof data);
//    console.log(data);
//});


function two(){
    fs.readFile(image_origial, function(err, original_data){
        fs.writeFile('image_orig.jpg', original_data, function(err) {});
        var base64Image = original_data.toString('base64');
        var decodedImage = new Buffer(base64Image, 'base64');
        fs.writeFile('image_decoded.jpg', decodedImage, function(err) {});
    });
}
two();


function one(){

    // This tells node to load the file into a Buffer 'original_data' because you
    // have not specified an encoding for the returned values. If you provided an
    // encoding, then original_data would be a string with that encoding.
    fs.readFile(image_original, function(err, original_data){

        // This tells node to take that buffer, and write it to the new filename.
        // Again no encoding is provided, so it will assume a Buffer or utf8 string.
        fs.writeFile('image_orig.jpg', original_data, function(err) {});

        // This tells node to create a new buffer from the old buffer, which means
        // it will iterate over original_data copying the bytes one at a time. But
        // they will be identical buffers. It will ignore the 'binary' argument
        // since the object you are passing isn't a string.
        // Then it encodes the content of that Buffer to base64, which is fine.

        //var base64Image = new Buffer(original_data, 'binary').toString('base64');
        var base64Image = original_data.toString('base64');
        fs.writeFile('base64str', base64Image);

        // Here you decode the base64 to a buffer, which is fine, but then you
        // convert the buffer into a string with encoding 'binary'. This means that
        // it is a string object whose code points are bytes of the buffer.

        //var decodedImage = new Buffer(base64Image, 'base64').toString('binary');
        var decodedImage = new Buffer(base64Image, 'base64');

        // Here you try to write that String object to a file. Since the argument you
        // have given is a string and you have not given an encoding argument for the
        // write command, then it will assume that 'utf8' is the encoding. It will try to
        // decode your binary string into a utf8 encoded buffer, and write that buffer.
        // This will cause it to fail because that encoding conversion is wrong.
        // Really through, 'binary' is just wrong to use. Buffers are already binary.
        fs.writeFile('image_decoded.jpg', decodedImage, function(err) {});
    });
}

