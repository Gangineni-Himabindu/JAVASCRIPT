// Named export of a constant
export const PI = 3.14;

// Named export of a function
export function add(x, y) {
    return x + y;
}

// Named export of a class
export class Calculator {
    constructor() {
        this.value = 0;
    }
    
    add(number) {
        this.value += number;
        return this.value;
    }
}

// Default export of a function
export default function multiply(x, y) {
    return x * y;
}
