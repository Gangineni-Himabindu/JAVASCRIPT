// Function to check if a number is positive
function checkIfPositive(number) {
    if (number > 0) {
        console.log(`${number} is positive.`);
    }
}

// Test the function with different values
checkIfPositive(10);  // Output: 10 is positive.
checkIfPositive(-5);  // No output, because the condition is false.
checkIfPositive(0);   // No output, because the condition is false.
