// Define a string containing JavaScript code
let codeString = 'let x = 10; let y = 20; x + y;';

// Use eval to execute the code contained in the string
let result = eval(codeString);

// Print the result
console.log('Result:', result); // Output: Result: 30

// Example of using eval to dynamically define a function
let functionString = `
    function add(a, b) {
        return a + b;
    }
    add(5, 7);
`;

// Execute the function string
let additionResult = eval(functionString);

// Print the result of the function call
console.log('Addition Result:', additionResult); // Output: Addition Result: 12
