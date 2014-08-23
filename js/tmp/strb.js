var stream = require('stream');

var s = new stream.Readable();
s._read = function noop() {}; // redundant? see update below
s.push('your text here');
s.push(null);
