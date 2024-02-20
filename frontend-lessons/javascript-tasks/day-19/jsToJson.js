// Task 1: JavaScript to JSON
// hurt my feelings
// 1. Create a JavaScript object named `product` with properties for `name`, `price`, and `quantity`.
// 2. Use the `JSON.stringify()` method to convert the `product` object into a JSON string.
// 3. Print the resulting JSON string to the console.
const product = {
    name:'Milo',
    price: 15,
    quantity: 12,
}

const productJSON = JSON.stringify(product);
console.log(productJSON); // OUTPUT: {"name":"Milo","price":15,"quantity":12}