// 1. The scope: => is a policy that manages the accessibility of variables.
const message = 'Hello';
console.log(message); // 'Hello'

// move the declaration of message inside of an if code block
if (true) {
    const message = 'Hello';
}
console.log(message); // ReferenceError: message is not defined


// =================
