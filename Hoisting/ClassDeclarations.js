/*
The class declaration defines a constructor function with the provided name and methods. 
Classes are a great addition introduced by ECMAScript 6. 
Classes are built on top of the JavaScript prototypal inheritance and have some additional goodies 
like super (to access the parent class), static (to define static methods), 
extends (to define a child class) and more.
*/

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(dX, dY) {
        this.x += dX;
        this.y += dY;
    }
}
// Create an instance
var origin = new Point(0, 0);
// Call a method
origin.move(50, 100);
// --------------

// Hoisting and class
// The class variables are registered at the beginning of the block scope. 
// But if you try to access the class before the definition, JavaScript throws ReferenceError

// Hoisting in class declarations is similar to variables declared with let statement

// Use the Company class
// Throws ReferenceError: Company is not defined
var apple = new Company('Apple');
// Class declaration
class Company {
    constructor(name) {
        this.name = name;
    }
}
// Use correctly the Company class after declaration
var microsoft = new Company('Microsoft');

// --------------

// Use the Sqaure class
console.log(typeof Square);   // => 'undefined'
//Throws TypeError: Square is not a constructor
var mySquare = new Square(10);
// Class declaration using variable statement
var Square = class {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }
    getArea() {
        return Math.pow(this.sideLength, 2);
    }
};
// Use correctly the Square class after declaration
var otherSquare = new Square(5);




