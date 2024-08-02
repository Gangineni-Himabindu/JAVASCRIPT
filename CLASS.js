// Define a class named Person
class Person {
    // Constructor method to initialize properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to greet
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // Method to celebrate birthday
    celebrateBirthday() {
        this.age += 1;
        console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old.`);
    }
}

// Create an instance of the Person class
const person1 = new Person('Alice', 30);

// Call methods on the instance
person1.greet();            // Output: Hello, my name is Alice and I am 30 years old.
person1.celebrateBirthday(); // Output: Happy Birthday Alice! You are now 31 years old.
