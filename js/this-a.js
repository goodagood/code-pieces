/*

What does this refer to in the

function doSomething()?

function doSomething() {
   this.style.color = '#cc0000';
}

In JavaScript this always refers to the “owner” of the function we're
executing, or rather, to the object that a function is a method of. When we
define our faithful function doSomething() in a page, its owner is the page, or
rather, the window object (or global object) of JavaScript. An onclick
property, though, is owned by the HTML element it belongs to.

This "ownership" is the result of JavaScript's object oriented approach. See
the Objects as associative arrays page for some more information.

------------ window --------------------------------------
|                                          / \           |
|                                           |            |
|                                          this          |
|   ----------------                        |            |
|   | HTML element | <-- this         -----------------  |
|   ----------------      |           | doSomething() |  |
|               |         |           -----------------  |
|          --------------------                          |
|          | onclick property |                          |
|          --------------------                          |
|                                                        |
----------------------------------------------------------

If we execute doSomething() without any more preparation the this keyword
refers to the window and the function tries to change the style.color of the
window. Since the window doesn't have a style object the function fails
miserably and produces JavaScript errors.

Copying

So if we want to use this to its full extent we have to take care that the
function that uses it is "owned" by the correct HTML element. In other words,
we have to copy the function to our onclick property. Traditional event
registration takes care of it.

element.onclick = doSomething;

The function is copied in its entirety to the onclick property (which now
becomes a method). So if the event handler is executed this refers to the HTML
element and its color is changed.


------------ window --------------------------------------
|                                                        |
|                                                        |
|                                                        |
|   ----------------                                     |
|   | HTML element | <-- this         -----------------  |
|   ----------------      |           | doSomething() |  |
|               |         |           -----------------  |
|          -----------------------          |            |
|          |copy of doSomething()|  <-- copy function    |
|          -----------------------                       |
|                                                        |
----------------------------------------------------------

The trick is of course that we can copy the function to several event handlers.
Each time this will refer to the correct HTML element:

------------ window --------------------------------------
|                                                        |
|                                                        |
|                                                        |
|   ----------------                                     |
|   | HTML element | <-- this         -----------------  |
|   ----------------      |           | doSomething() |  |
|               |         |           -----------------  |
|          -----------------------          |            |
|          |copy of doSomething()|  <-- copy function    |
|          -----------------------          |            |
|                                           |            |
|   -----------------------                 |            |
|   | another HTML element| <-- this        |            |
|   -----------------------     |           |            |
|               |               |           |            |
|          -----------------------          |            |
|          |copy of doSomething()|  <-- copy function    |
|          -----------------------                       |
|                                                        |
----------------------------------------------------------

Thus you use this to the fullest extent. Each time the function is called, this
refers to the HTML element that is currently handling the event, the HTML
element that "owns" the copy of doSomething().

Referring

However, if you use inline event registration

<element onclick="doSomething()">

you do not copy the function! Instead, you refer to it, and the difference is
crucial. The onclick property does not contain the actual function, but merely
a function call:

doSomething();

So it says “Go to doSomething() and execute it.” When we arrive at
doSomething() the this keyword once again refers to the global window object
and the function returns error messages.

------------ window --------------------------------------
|                                          / \           |
|                                           |            |
|                                          this          |
|   ----------------                        |            |
|   | HTML element | <-- this         -----------------  |
|   ----------------      |           | doSomething() |  |
|               |         |           -----------------  |
|          -----------------------         / \           |
|          | go to doSomething() |          |            |
|          | and execute it      | ---- reference to     |
|          -----------------------       function        |
|                                                        |
----------------------------------------------------------

The difference

If you want to use this for accessing the HTML element that is handling the
event, you must make sure that the this keyword is actually written into the
onclick property. Only in that case does it refer to the HTML element the event
handler is registered to. So if you do

element.onclick = doSomething;
alert(element.onclick)

you get

function doSomething()
{
    this.style.color = '#cc0000';
}

As you can see, the this keyword is present in the onclick method. Therefore it
refers to the HTML element.

But if you do

<element onclick="doSomething()">
alert(element.onclick)

you get

function onclick()
{
    doSomething()
}

This is merely a reference to function doSomething(). The this keyword is not
present in the onclick method so it doesn't refer to the HTML element.

Examples - copying

this is written into the onclick method in the following cases:

element.onclick = doSomething
element.addEventListener('click',doSomething,false)
element.onclick = function () {this.style.color = '#cc0000';}
<element onclick="this.style.color = '#cc0000';">

Examples - referring

In the following cases this refers to the window:

element.onclick = function () {doSomething()}
element.attachEvent('onclick',doSomething)
<element onclick="doSomething()">

Note the presence of attachEvent(). The main drawback of the Microsoft event
registration model is that attachEvent() creates a reference to the function
and does not copy it. Therefore it is sometimes impossible to know which HTML
currently handles the event.

Combination

When using inline event registration you can also send this to the function so
that you can still use it:

<element onclick="doSomething(this)">

function doSomething(obj) {
    // this is present in the event handler and is sent to the function
    // obj now refers to the HTML element, so we can do
    obj.style.color = '#cc0000';
}


*/
