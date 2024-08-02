// Define the parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Define the child class that extends the parent class
class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call the parent class constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }

    getBreed() {
        return this.breed;
    }
}

// Create instances of the classes
const myAnimal = new Animal('Generic Animal');
const myDog = new Dog('Buddy', 'Golden Retriever');

// Call methods on the instances
myAnimal.speak();   // Output: Generic Animal makes a sound.
myDog.speak();      // Output: Buddy barks.
console.log(myDog.getBreed());  // Output: Golden Retriever
