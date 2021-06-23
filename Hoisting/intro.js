// Hoisting is the mechanism of moving the variables and 
// functions declaration to the top of the function scope (or global scope if outside any function).

// Declare
var strNumber;

// Initialize
strNumber = '16';

// Use
parseInt(strNumber); // => 16


// -------------------

// JavaScript functions can be used before the declaration: use -> declare.
// It happens because the function declaration in JavaScript is hoisted to the top of the scope.

// Use
double(5); // => 10
// Declare
function double(num) {
  return num * 2;
}

// ------------

// Hoisting affects differently:
//     variable declarations: using var, let or const keywords
//     function declarations: using function <name>() {...} syntax
//     class declarations: using class keyword
