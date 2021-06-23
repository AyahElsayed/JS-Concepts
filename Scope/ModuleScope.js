// 4. Module scope
// ES2015 module also creates a scope for variables, functions, classes.

// The module circle defines a constant pi

// --------------
// "circle" module scope
const pi = 3.14159;

console.log(pi); // 3.14159
// Usage of pi

// ------------

import './circle';

console.log(pi); // throws ReferenceError

// The variable pi is not accessible outside of circle module (unless explicitly exported using export).
