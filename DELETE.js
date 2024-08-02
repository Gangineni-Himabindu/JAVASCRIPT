// Define an object with some properties
let person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
};

console.log('Before deletion:', person);

// Use the delete keyword to remove a property
delete person.occupation;

console.log('After deletion:', person);
