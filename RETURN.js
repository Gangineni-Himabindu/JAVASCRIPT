// Function to check if a number is even or odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return `${number} is even.`;
    } else {
        return `${number} is odd.`;
    }
}

// Test the function with different values
console.log(checkEvenOdd(4));  // Output: 4 is even.
console.log(checkEvenOdd(7));  // Output: 7 is odd.
