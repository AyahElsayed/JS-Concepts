// 2. Block scope
// A code block in JavaScript defines a scope for variables declared using let and const

if (true) {
    // "if" block scope
    const message = 'Hello';
    console.log(message); // 'Hello'
}
console.log(message); // throws ReferenceError

// ----------------

for (const color of ['green', 'red', 'blue']) {
    // "for" block scope
    const message = 'Hi';
    console.log(color);   // 'green', 'red', 'blue'
    console.log(message); // 'Hi', 'Hi', 'Hi'
}
console.log(color);   // throws ReferenceError
console.log(message); // throws ReferenceError

// ---------------

while (true) {
    // "while" block scope
    const message = 'Hi';
    console.log(message); // 'Hi'
}
console.log(message); // => throws ReferenceError

//  ---------------

{
    // block scope
    const message = 'Hello';
    console.log(message); // 'Hello'
}
console.log(message); // throws ReferenceError

// ------------

// 2.1 var is not block scoped