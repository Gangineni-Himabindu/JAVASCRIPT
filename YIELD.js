// Define a generator function with a return value
function* range(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
    return 'Done'; // Return value when the generator is done
  }
  
  // Create an instance of the generator
  const numbers = range(1, 3);
  
  
  // Access the return value
  const result = range(1, 3);
  console.log(result.next().value); // Output: 1
  console.log(result.next().value); // Output: 2
  console.log(result.next().value); // Output: 3
  console.log(result.next().value); // Output: Done
  