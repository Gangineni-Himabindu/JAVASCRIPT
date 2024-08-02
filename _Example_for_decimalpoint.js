// Declare floating-point numbers
let pi = 3.14159;
let e = 2.71828;

// Perform arithmetic operations with floating-point numbers
let sum = pi + e;
let difference = pi - e;
let product = pi * e;
let quotient = pi / e;

// Log the results to the console
console.log('Value of pi:', pi);             // Output: Value of pi: 3.14159
console.log('Value of e:', e);               // Output: Value of e: 2.71828
console.log('Sum:', sum);                    // Output: Sum: 5.85987
console.log('Difference:', difference);      // Output: Difference: 0.42331
console.log('Product:', product);            // Output: Product: 8.53973407415999
console.log('Quotient:', quotient);          // Output: Quotient: 1.1557278508410573

// Demonstrate precision issues with floating-point arithmetic
let largeNumber = 0.1 + 0.2;
console.log('0.1 + 0.2:', largeNumber);      // Output: 0.1 + 0.2: 0.30000000000000004
