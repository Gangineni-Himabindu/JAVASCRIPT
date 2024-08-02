// Define an object
const person = {
    name: 'Alice',
    age: 30,
    profession: 'Engineer'
  };
  
  // Check if a property exists in the object
  console.log('name' in person);       // Output: true
  console.log('age' in person);        // Output: true
  console.log('profession' in person); // Output: true
  console.log('address' in person);    // Output: false
  