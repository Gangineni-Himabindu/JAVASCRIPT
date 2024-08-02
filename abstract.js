class Animal {
    constructor(name) {
        if (this.constructor === Animal) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.name = name;
    }

    makeSound() {
        throw new Error("Abstract method 'makeSound' must be implemented.");
    }

    describe() {
        return `This is ${this.name}.`;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        return 'Woof! Woof!';
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        return 'Meow! Meow!';
    }
}

try {
    const myAnimal = new Animal("Generic Animal");
} catch (e) {
    console.log(e.message); // Abstract classes can't be instantiated.
}

const myDog = new Dog("Buddy");
console.log(myDog.describe()); // This is Buddy.
console.log(myDog.makeSound()); // Woof! Woof!

const myCat = new Cat("Whiskers");
console.log(myCat.describe()); // This is Whiskers.
console.log(myCat.makeSound()); // Meow! Meow!
