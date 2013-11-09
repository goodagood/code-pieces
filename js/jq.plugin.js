/* 
 * stackoverflow  questions/10638948/extremely-simple-jquery-plugin-tutorial
 * A jQuery plugin is nothing more than a function added in the jQuery function
 * object (jQuery.fn).
 */


var sayHello = function(elem, name) {
    elem.innerHTML = 'Hello ' + name;
}

// it will become something like this:

jQuery.fn.sayHello = sayHello;

// And you can use it like this:

$.sayHello($('#helloBox'), 'World');

/*
But that is not so nice, you want something like this:

$('#helloBox').sayHello('World');

That can be done by removing the elem argument from our plugin and use $(this)
inside the plugin to get the elements we selected:
*/

jQuery.fn.sayHello = function(name) {
    $(this).html('Hello ' + name);
}

// Now we can use it like this:

$('#helloBox').sayHello('World');


/*
 * Another simple skeleton
 */

(function ($) {
    // local globals go here - referenced via closure

    $.fn.myPlugin = function (options) {
        options = $.extend({}, $.fn.myPlugin.config, options);

        return this.each(function () {
            // initialize the elements in the collection
        });
    };

    $.fn.myPlugin.config = {
        // set values and custom functions
    };

}(jQuery));
