// Define variables with different types of values
const number1 = 42;
const string = 'Hello, world!';
const boolean = true;
const object = { name: 'Alice', age: 30 };
const array = [1, 2, 3];
const func = function() { return 'I am a function'; };
const nullValue = null;
const undefinedValue = undefined;

// Use typeof to determine the type of each variable
console.log(typeof number1);          // Output: "number"
console.log(typeof string);          // Output: "string"
console.log(typeof boolean);         // Output: "boolean"
console.log(typeof object);          // Output: "object"
console.log(typeof array);           // Output: "object" (arrays are objects in JavaScript)
console.log(typeof func);            // Output: "function"
console.log(typeof nullValue);       // Output: "object" (null is considered an object in JavaScript)
console.log(typeof undefinedValue);  // Output: "undefined"

// Demonstrating typeof with an expression
console.log(typeof (number1 + 1));    // Output: "number"
console.log(typeof (string + '!'));  // Output: "string"
console
