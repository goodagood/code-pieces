
/*
 * User keyword: var
 *
 * If you don’t use the `var` keyword when creating a variable, it will be a
 * global variable by default. 
 *
 *
 * To keep variable local, there are ways of encapsulation.  Firstly, you could
 * just write all your code within a self-invoking, anonymous function: 
 * 
 * */

(function () {  
  var total = 0, tax = 0.05;  

  /*
   * other code  
   *
   * This way, absolutely no code outside the function can get to the values
   * you have inside the function. This works for “personal” code, but it’s not
   * so great for functionality that you want to distribute.   */
}());  
                      

/*
 * Hide variables by making a 'object'.
 *
 * Some call it: module pattern.
 */

                      
var my_object = (function () {  
  var hide = 0; my = 0.05, local = 8;

  // other code  

  return {  
    addItem : function (item) { },  
    removeItem : function (item) { },  
    calculateTitle : function () { }  
  };  
}());  
                      

