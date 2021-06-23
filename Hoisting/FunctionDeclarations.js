
function isOdd(number) {
    return number % 2 === 1;
}
isOdd(5); // => true

// Hoisting and function declaration

// Hoisting in a function declaration allows to use the function anywhere in the enclosing scope, 
// even before the declaration

// Call the hoisted function
equal(1, '1'); // => false
// Function declaration
function equal(value1, value2) {
    return value1 === value2;
}

// Notice the difference between a function declaration function <name>() {...} and 
// a function expression var <name> = function() {...}. 
// Both are used to create functions, however have different hoisting mechanisms. 


// Call the hoisted function
addition(4, 7); // => 11

// The variable is hoisted, but is undefined
substraction(10, 7); // TypeError: substraction is not a function
// Function declaration
function addition(num1, num2) {
    return num1 + num2;
}
// Function expression
var substraction = function (num1, num2) {
    return num1 - num2;
};


