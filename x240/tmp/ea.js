const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
    EventEmitter.call(this);
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('an event occurred!');
});
myEmitter.emit('event');


var ee = new EventEmitter();

ee.init = function(mid){
    mid = mid || 5;
    this.mid = mid;
    this.emit('event');
}

ee.on('event', () => {
    console.log('an event occurred!');
});
ee.emit('event');
