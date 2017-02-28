/* Javascript will put a semicolon at the end of line when it think it's needed.
 * This semicolon insertion cause trouble in the following codes:
 */

function foo (name) {  
  return  
  {  
    name : name  
  };  
  // The line of return will get an auto-semicolon, so 'undefined' returned.
}  



function bar (name) {  
  return  {  
    name : name  
  };  
  // This will work.
}  
