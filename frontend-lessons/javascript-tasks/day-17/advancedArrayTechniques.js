// Task 3: Advanced Array Techniques

// Create an array named `numbers` with five numeric values
const numbers = [20, 78, 33, 5, 7];

// New array multiplied by 2
const newNums = numbers.map((number) => number * 2);

// New array containing only numbers greater than 5 from the original array
const origFive = numbers.filter((number) => number > 5);

// New array containing numbers greater than 5 from the array multiplied by 2
const newFive = newNums.filter((newNum) => newNum > 5);

// Display
console.log("Original array:", numbers);
console.log("New array (multiplied by 2):", newNums);
console.log("Original array (numbers greater than 5):", origFive);
console.log("New array (numbers greater than 5, multiplied by 2):", newFive);
