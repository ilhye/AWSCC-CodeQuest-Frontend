// JavaScript Fundamentals - Day 15: Assignment

// 1. Use a `for` loop to count from 1 to 5 and print each number to the console.
for (let i = 1;i <= 5;i++) {
    console.log("Number " + i);
}

// 2. Create an array named `cookies` with different types of cookies (strings).
// 3. Use a `for` loop to iterate over the `cookies` array and print each type of cookie to the console.
const cookie = ["chocolate", "dark chocolate", "matcha", "red velvet"];
for (let i = 0; i < cookie.length; i++) {
    console.log("Type of cookie: " + cookie[i]);
}

// 4.  Create a variable named `jarNotEmpty` and set it to `true`.
// 5.  Use a `while` loop to simulate eating cookies while the jar is not empty.
let iteration = 1;
let jarNotEmpty = true;
while (jarNotEmpty) {
    if (iteration >= 5) {
        jarNotEmpty = false;
    }
    console.log("Eating cookies");
    iteration++;
}
console.log("Jar is empty. No more cookies.");