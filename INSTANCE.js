// Test if a number is an instance of Number
const num = new Number(5);
console.log(num instanceof Number); // true

// Test if a string is an instance of String
const str = new String('Hello');
console.log(str instanceof String); // true

// Test if a number literal is an instance of Number (false)
const numLiteral = 5;
console.log(numLiteral instanceof Number); // false

// Test if a string literal is an instance of String (false)
const strLiteral = 'Hello';
console.log(strLiteral instanceof String); // false
