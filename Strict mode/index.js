// strict mode 
// sloppy mode => default mode

// Invoking strict mode
'use strict'; // or "use strict";

x = 5;  // default mode => no error but  strict mode  => error , must be var x = 5;
console.log(x);
// -------------------

// Strict mode for functions
function strict() {
    // Function-level strict mode syntax
    'use strict';
    function nested() { return 'And so am I!'; }
    return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() { return "I'm not strict."; }
// ----
function f(x, x) {
    console.log(x);
}
// default mode => no error, take the second parameter x=6  
// strict mode  => error , no dublicated
f(5, 6);

// ------------------

// Strict mode for modules
// strict by default

// ----------------

// Strict mode for classes
// changes some previously-accepted mistakes into errors.'use strict';


mistypeVariable = 17; // Assuming no global variable mistypeVariable exists
// this line throws a ReferenceError due to the
// misspelling of variable


'use strict';

// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = { get x() { return 17; } };
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // throws a TypeError


'use strict';
delete Object.prototype; // throws a TypeError


'use strict';
var sum = 015 + // !!! syntax error
    197 +
    142;

var sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16


(function () {
    'use strict';

    false.true = '';         // TypeError
    (14).sailing = 'home';   // TypeError
    'with'.you = 'far away'; // TypeError

})();


// ----------

'use strict';
var x = 17;
with (obj) { // !!! syntax error
    // If this weren't strict mode, would this be var x, or
    // would it instead be obj.x?  It's impossible in general
    // to say without running the code, so the name can't be
    // optimized.
    x;
}

// 

function strict1(str) {
    'use strict';
    return eval(str); // str will be treated as strict mode code
}
function strict2(f, str) {
    'use strict';
    return f(str); // not eval(...): str is strict if and only
    // if it invokes strict mode
}
function nonstrict(str) {
    return eval(str); // str is strict if and only
    // if it invokes strict mode
}

strict1("'Strict mode code!'");
strict1("'use strict'; 'Strict mode code!'");
strict2(eval, "'Non-strict code.'");
strict2(eval, "'use strict'; 'Strict mode code!'");
nonstrict("'Non-strict code.'");
nonstrict("'use strict'; 'Strict mode code!'");

// 

'use strict';

var x;
delete x; // !!! syntax error

eval('var y; delete y;'); // !!! syntax error

// Making eval and arguments simpler
