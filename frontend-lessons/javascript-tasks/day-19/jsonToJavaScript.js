// Task 2: JSON to JavaScript

// 4. Create a JSON string representing a book with properties for `title`, `author`, and `publishedYear`.
// 5. Use the `JSON.parse()` method to convert the JSON string into a JavaScript object.
// 6. Access and print the `author` property of the resulting JavaScript object.
const book = 
'{ "title": "Omniscient Reader Point of View","author": "Kim Sakyung", "publishedYr": 2019}';

const bookJS = JSON.parse(book);
console.log(bookJS.author);