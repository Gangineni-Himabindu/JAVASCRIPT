// Declare Boolean variables
let isTrue = true;
let isFalse = false;

// Use Boolean variables in conditional statements
if (isTrue) {
    console.log('The value is true.'); // Output: The value is true.
} else {
    console.log('The value is false.');
}

if (!isFalse) {
    console.log('The value is not false.'); // Output: The value is not false.
} else {
    console.log('The value is false.');
}

// Perform logical operations with Boolean values
let a = true;
let b = false;
let andOperation = a && b;  // Logical AND
let orOperation = a || b;   // Logical OR
let notOperation = !a;      // Logical NOT

// Log the results to the console
console.log('AND Operation (true && false):', andOperation); // Output: AND Operation (true && false): false
console.log('OR Operation (true || false):', orOperation);   // Output: OR Operation (true || false): true
console.log('NOT Operation (!true):', notOperation);         // Output: NOT Operation (!true): false
