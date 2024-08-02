// Declare a variable with var
var message = "Hello, World!";

// Function to demonstrate variable scope
function showMessage() {
    // Declare a variable with var inside the function
    var localMessage = "Hello from the function!";
    console.log(localMessage); // Output: Hello from the function!
}

// Call the function
showMessage();

// Access the variable declared outside the function
console.log(message); // Output: Hello, World!

// Try to access the variable declared inside the function outside
// Uncommenting the next line will cause an error because localMessage is not defined outside the function
// console.log(localMessage); // ReferenceError: localMessage is not defined
