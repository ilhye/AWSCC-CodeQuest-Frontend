// Task 1: Array Basics

// 1. Create an array named `cities` containing the names of five cities.
// 2. Access and print the third city in the `cities` array.
// 3. Modify the second city in the array to a different city of your choice.

const cities = ["Manila", "Cavite", "Quezon", "Tarlac", "Davao"];

// Print cities
process.stdout.write("Cities: ");
for(let i = 0;i < cities.length;i++) {
    process.stdout.write(cities[i] + " ");
}

console.log(); // Print newline
console.log("City 3: " + cities[2]); // Print third city
cities[1] = "Antipolo";
console.log("City 1: " + cities[1]); // Modfiy second city