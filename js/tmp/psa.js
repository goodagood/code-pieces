
var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter();

ee.on('event_no_#1', function(what) {
  console.log('got event_no_#1');
  console.log('do thing for the: event_no_#1');
  console.log('got the parameter: ', typeof what);
});

ee.emit('event_no_#1', "ha ha, you do job.");

exports.ee = ee;
