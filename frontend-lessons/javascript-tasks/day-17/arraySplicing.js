// Task 5: Array Splicing

const characters = ["a", "b", "c", "d", "e", "f"];
characters.splice(2, 0, "r", "x"); // [a, b, r, x, c, d, e, f]
characters.splice(4, 3);
console.log(characters); // [a, b, r, x, f]
