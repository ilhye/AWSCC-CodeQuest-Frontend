// Task 3: Advanced JSON Operations

// 7. Create an array of objects, each representing a person with properties for `name`, `age`, and `city`.
// 8. Use `JSON.stringify()` to convert the array of objects into a JSON string.
// 9. Use `JSON.parse()` to convert the JSON string back into an array of objects.
// 10. Print the `name` and `city` of each person in the array to the console.
const person = [
    {name: 'Alice', age: 20, city: 'Manila'},
    {name: 'Alice', age: 20, city: 'Manila'},
    {name: 'Alice', age: 20, city: 'Manila'}
];
const personJSON = JSON.stringify(person);
console.log('JavaScript to JSON: ' + personJSON);

const personJS = JSON.parse(personJSON);
console.log('JSON to JavaScript:');
for (let i = 0; i < personJS.length; i++) {
    console.log('Name:', personJS[i].name, 'City:', personJS[i].city);
}
