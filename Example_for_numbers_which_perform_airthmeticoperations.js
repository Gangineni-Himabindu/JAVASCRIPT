// Declare integer variables
let age = 25;
let year = 2024;
let temperature = -5;

// Perform arithmetic operations with integers
let sum = age + year;
let difference = year - age;
let product = age * 2;
let quotient = year / 4;

// Log the results to the console
console.log('Age:', age);               // Output: Age: 25
console.log('Year:', year);             // Output: Year: 2024
console.log('Temperature:', temperature); // Output: Temperature: -5
console.log('Sum:', sum);              // Output: Sum: 2049
console.log('Difference:', difference); // Output: Difference: 1999
console.log('Product:', product);      // Output: Product: 50
console.log('Quotient:', quotient);    // Output: Quotient: 506

// Demonstrate how JavaScript handles large integers
let largeNumber = 9007199254740991; // Largest integer value that can be represented accurately
console.log('Large Number:', largeNumber); // Output: Large Number: 9007199254740991

// Adding 1 to the largest integer value
let largerNumber = largeNumber + 1;
console.log('Larger Number:', largerNumber); // Output: Larger Number: 9007199254740992

// Adding 1 again to demonstrate precision limit
let evenLargerNumber = largerNumber + 1;
console.log('Even Larger Number:', evenLargerNumber); // Output: Even Larger Number: 9007199254740992
