// JavaScript Fundamentals - Day 16: Assignment

// 1. Create a function named `greet` that prints a greeting message to the console.
// 2. Call the `greet` function to display the greeting.
// 3. Modify the `greet` function to take a parameter `name` and greet the person by name.
function greet(greetings) {
  console.log("Hello!" + greetings + "How are you?");
}
const greetings = "Tina";
greet(greetings);

// 4. Create a function named `addNumbers` that takes two parameters and returns their sum.
// 5. Call the `addNumbers` function with different values and print the results.
function addNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addNumbers(10, 32);
console.log("Sum: " + sum);

// 6. Create a function named `calculateAverage` that takes an array of numbers as a parameter and returns the average.
// 7. Use the `calculateAverage` function with an array of numbers and print the result.
function calculateAverage(arrNum) {
  let sum = 0;
  for (let i = 0; i < arrNum.length; i++) {
    sum += arrNum[i];
  }
  return sum / arrNum.length;
}
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const average = calculateAverage(arrNum);

console.log(`Average: ${average}`);
