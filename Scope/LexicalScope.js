// 7. Lexical scope (or static scoping)
// The lexical scope consists of outer scopes determined statically.
/* 
Lexical scoping means that the accessibility of variables is determined statically 
by the position of the variables within the nested function scopes: the inner function 
scope can access variables from the outer function scope.
*/

function outerFunc() {
    // the outer scope
    let outerVar = 'I am from outside!';

    function innerFunc() {
        // the inner scope
        console.log(outerVar); // 'I am from outside!'  }

        return innerFunc;
    }

    const inner = outerFunc();
    inner();
}