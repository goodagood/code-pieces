var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      //assert.equal(1, [1,2,3].indexOf(0));
    })
  })
})

//function done(err){console.log(err);}

describe('some thing tests', function(){
    describe('ok, now', function(){
        it.only('should do it now', function(done){
            setTimeout(function(){
                //throw 'err a';
                done('haha err');
            }, 1000);
        });
    });
});


//describe('User', function(){
//  describe('#save()', function(){
//    it('should save without error', function(done){
//      var user = new User('Luna');
//      user.save(function(err){
//        if (err) throw err;
//        done();
//      });
//    })
//  })
//})