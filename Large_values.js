// Declare large integers using BigInt
let bigInt1 = 1234567890123456789012345678901234567890n;
let bigInt2 = 9876543210987654321098765432109876543210n;

// Perform arithmetic operations with BigInt
let bigIntSum = bigInt1 + bigInt2;
let bigIntDifference = bigInt2 - bigInt1;
let bigIntProduct = bigInt1 * bigInt2;
let bigIntQuotient = bigInt2 / bigInt1;

// Log the results to the console
console.log('BigInt 1:', bigInt1);                 // Output: BigInt 1: 1234567890123456789012345678901234567890n
console.log('BigInt 2:', bigInt2);                 // Output: BigInt 2: 9876543210987654321098765432109876543210n
console.log('Sum:', bigIntSum);                    // Output: Sum: 11111111101111111110111111110111111111000n
console.log('Difference:', bigIntDifference);      // Output: Difference: 9876543210987654321098765432109876543210n
console.log('Product:', bigIntProduct);            // Output: Product: 121932631137021795223746383463301488071616489059858117657529974800n
console.log('Quotient:', bigIntQuotient);          // Output: Quotient: 80n

// Example of mixed BigInt and Number (Note: This will throw an error)
// Uncomment the following line to see the error
// let mixedOperation = bigInt1 + 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// Properly converting Number to BigInt for mixed operations
let number = 1;
let convertedBigInt = BigInt(number);
let validOperation = bigInt1 + convertedBigInt;
console.log('Valid Sum with Number:', validOperation); // Output: Valid Sum with Number: 1234567890123456789012345678901234567891n
