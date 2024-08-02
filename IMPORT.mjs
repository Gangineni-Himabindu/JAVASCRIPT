// Import named exports
import * as EXPORT from './EXPORT.mjs';

// Import default export
import multiply from './EXPORT.mjs';

console.log('PI:', EXPORT.PI);                      // Output: PI: 3.14
console.log('Sum:', EXPORT.add(5, 7));              // Output: Sum: 12

const calculator = new EXPORT.Calculator();
console.log('Calculator initial value:', calculator.value); // Output: Calculator initial value: 0
console.log('Calculator after adding 10:', calculator.add(10)); // Output: Calculator after adding 10: 10

console.log('Product:', multiply(5, 7));               // Output: Product: 35
