// 3. Function scope
// A function in JavaScript defines a scope for variables declared using var, let and const.

function run() {
    // "run" function scope
    var message = 'Run, Forrest, Run!';
    console.log(message); // 'Run, Forrest, Run!'
}

run();
console.log(message); // throws ReferenceError

// -------------

function run() {
    // "run" function scope
    const two = 2;
    let count = 0;
    function run2() { }

    console.log(two);   // 2
    console.log(count); // 0
    console.log(run2);  // function
}

run();
console.log(two);   // throws ReferenceError
console.log(count); // throws ReferenceError
console.log(run2);  // throws ReferenceError