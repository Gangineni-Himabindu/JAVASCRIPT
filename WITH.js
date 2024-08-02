// Define an object
const person = {
  name: 'Alice',
  age: 30,
  city: 'Wonderland'
};

// Destructure properties from the object
function displayPersonInfo() {
  const { name, age, city } = person;
  console.log(name); // Output: Alice
  console.log(age);  // Output: 30
  console.log(city); // Output: Wonderland
}

// Call the function to see the output
displayPersonInfo();

// Outside the function, access properties using the object
console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 30
console.log(person.city); // Output: Wonderland
