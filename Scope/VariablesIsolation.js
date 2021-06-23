// Variables isolation
// An immediate property of scope arises: the scope isolates the variables. 
// And what’s good different scopes can have variables with the same name.

function foo() {
    // "foo" function scope
    let count = 0;
    console.log(count); // 0}

    function bar() {
        // "bar" function scope
        let count = 1;
        console.log(count); // 1
    }

    foo();
    bar();
}

// foo() and bar() function scopes have their own, but same named, variables count
