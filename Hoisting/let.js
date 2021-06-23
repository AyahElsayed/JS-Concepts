
if (true) {
    // Declare name block variable
    let month;
    console.log(month); // => undefined  
    // Declare and initialize year block variable
    let year = 1994;
    console.log(year); // => 1994
}
// name and year or not accessible here, outside the block
console.log(year); // ReferenceError: year is not defined

// ----------
// Hoisting and let

// let variables are registered at the top of the block. But when the variable is accessed before declaration, 
// JavaScript throws an error: ReferenceError: <variable> is not defined.

function isTruthy(value) {
    var myVariable = 'Value 1';
    if (value) {
        /**
         * temporal dead zone for myVariable
         */
        // Throws ReferenceError: myVariable is not defined
        console.log(myVariable);
        let myVariable = 'Value 2';
        // end of temporary dead zone for myVariable
        console.log(myVariable); // => 'Value 2'
        return true;
    }
    return false;
}
isTruthy(1); // => true

// let expansion in the entire block protects variables from modification by outer scopes, even before declaration.