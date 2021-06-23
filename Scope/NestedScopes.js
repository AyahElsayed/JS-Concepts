// 5. Scopes can be nested

function run() {
    // "run" function scope
    const message = 'Run, Forrest, Run!';

    if (true) {
        // "if" code block scope
        const friend = 'Bubba';
        console.log(message); // 'Run, Forrest, Run!'
    }

    console.log(friend); // throws ReferenceError
}

run();

// The inner scope can access the variables of its outer scope.