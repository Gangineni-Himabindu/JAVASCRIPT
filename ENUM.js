// Simulate an enum in JavaScript using an object
const Color = {
  Red: 1,
  Green: 2,
  Blue: 3
};

// Use the simulated enum
const myColor = Color.Green;

console.log(myColor); // Output: 2
console.log(Object.keys(Color).find(key => Color[key] === myColor)); // Output: Green
