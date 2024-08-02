// Function that uses the arguments object
function showArguments() {
    console.log('Arguments:', arguments);
    for (let i = 0; i < arguments.length; i++) {
        console.log(`Argument ${i}:`, arguments[i]);
    }
}

// Call the function with multiple arguments
showArguments(1, 'hello', true, { key: 'value' });
