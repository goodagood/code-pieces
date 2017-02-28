function Promise(fn) {
  var state = 'pending';
  var value;
  var deferred;

  function resolve(newValue) {
    value = newValue;
    state = 'resolved';

    if(deferred) {
      handle(deferred);
    }
  }

  function handle(onResolved) {
    if(state === 'pending') {
      deferred = onResolved;
      return;
    }

    onResolved(value);
  }

  this.then = function(onResolved) {
    handle(onResolved);
  };

  fn(resolve);
}

function foo(){
  setTimeout(function(){
    console.log('lagged thing');
  }, 3);
}

var promised_foo = new Promise(foo);

promised_foo.then(function(){
  console.log('promised');
});
