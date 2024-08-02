function divideNumbers(a, b) {
    try {
        // Attempt to perform division
        if (b === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        let result = a / b;
        console.log('Result:', result);
    } catch (error) {
        // Handle the error
        console.error('Error occurred:', error.message);
    } finally {
        // This block is executed regardless of whether an error occurred or not
        console.log('Execution completed.');
    }
}

// Test the function with valid and invalid inputs
divideNumbers(10, 2); // Output: Result: 5
                      //         Execution completed.

divideNumbers(10, 0); // Output: Error occurred: Division by zero is not allowed.
                      //         Execution completed.
