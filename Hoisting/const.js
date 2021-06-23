// The constant statement creates and initializes constants inside the block scope

const COLOR = 'red';
console.log(COLOR); // => 'red'
const ONE = 1, HALF = 0.5;
console.log(ONE);   // => 1
console.log(HALF);  // => 0.5

// When a constant is defined, it must be initialized with a value in the same const statement. 
// After declaration and initialization, the value of a constant cannot be modified

const PI = 3.14;
console.log(PI); // => 3.14
PI = 2.14; // TypeError: Assignment to constant variable

// ------------
// Hoisting and const

function double(number) {
    // temporal dead zone for TWO constant
    console.log(TWO); // ReferenceError: TWO is not defined
    const TWO = 2;
    // end of temporal dead zone
    return number * TWO;
 }
 double(5); // => 10