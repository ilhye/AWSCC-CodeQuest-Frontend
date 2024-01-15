// Task 4: Array Manipulation

const colors = ["green", "red", "pink", "orange"];  // Create an array
const modifiedColors = colors.slice(1, 3);          // Create a new array containing the second and third colors
colors.unshift("blue");                             // Add a new color
colors.shift();                                     // Remove the first color
console.log(modifiedColors);                        // Display array
