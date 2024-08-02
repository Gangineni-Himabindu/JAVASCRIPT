// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Create an instance of Person
  const alice = new Person('Alice', 30);
  
  console.log(alice.name); // Output: Alice
  console.log(alice.age);  // Output: 30
  