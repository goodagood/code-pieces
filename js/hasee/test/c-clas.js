// Generated by CoffeeScript 1.8.0
(function() {
  var A, a, p;

  p = console.log;

  A = (function() {
    A.prototype.vc = 'inner';

    function A(va, vb) {
      this.va = va;
      p('con-stru-ctor');
    }

    A.prototype.show_a = function() {
      p("va: " + this.va);
      return this.va;
    };

    A.prototype.show_b = function() {
      p("vb: " + this.vb);
      return this.vb;
    };

    A.prototype.show_c = function() {
      p("vc: " + this.vc);
      return this.vc;
    };

    A.prototype.show_more = function() {
      this.show_a();
      return this.show_b();
    };

    return A;

  })();

  a = new A(1, 11);

  a.show_more();

}).call(this);