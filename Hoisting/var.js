
// Declare num variable
var num;
console.log(num); // => undefined
// Declare and initialize str variable
var str = 'Hello World!';
console.log(str); // => 'Hello World!'

// -----------

// Hoisting and var
// Variables declared with var are hoisted to the top of the enclosing function scope. 
// If the variable is accessed before declaration, it evaluates to undefined.

function double(num) {
    console.log(myVariable); // => undefined
    var myVariable;
    return num * 2;
}
double(3); // => 6

// JavaScript will move the declaration var myVariable to the top of double() scope

function double(num) {
    var myVariable;          // moved to the top
    console.log(myVariable); // => undefined
    return num * 2;
}
double(3); // => 

// When the variable is hoisted, the declaration is moved to the top, 
// but the initial value assignment remains in place

function sum(a, b) {
    console.log(myString); // => undefined
    var myString = 'Hello World';
    console.log(myString); // => 'Hello World'
    return a + b;
}
sum(16, 10); // => 26