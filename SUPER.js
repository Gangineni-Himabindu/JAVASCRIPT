// Define a base (parent) class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  // Define a derived (child) class that extends the parent class
  class Dog extends Animal {
    constructor(name, breed) {
      // Call the parent class's constructor
      super(name);
      this.breed = breed;
    }
  
    // Override the speak method from the parent class
    speak() {
      // Call the parent class's speak method
      super.speak();
      console.log(`${this.name} barks.`);
    }
  }
  
  // Create an instance of the Dog class
  const myDog = new Dog('Rex', 'Golden Retriever');
  
  // Call the speak method of the Dog instance
  myDog.speak();
  // Output:
  // Rex makes a noise.
  // Rex barks.
  
  // Access the properties
  console.log(myDog.name); // Output: Rex
  console.log(myDog.breed); // Output: Golden Retriever
  