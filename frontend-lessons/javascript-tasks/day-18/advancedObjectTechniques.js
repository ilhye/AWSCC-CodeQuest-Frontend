// Task 4: Advanced Object Techniques

// 10. Create an object named `person` with properties for `name`, `age`, and `address`.
// 11. Use the `delete` keyword to remove the `address` property from the `person` object.
// 12. Create another object named `employee` with properties for `name` and `position`. Combine the `person` and `employee` objects into a new object named `employeeDetails`.
const person = {
    name: 'Tony',
    age: 19,
    address: 'Manila'
};

const employee = {
    name: 'Alysa',
    position: 'Owner'
};

delete person.address;
let employeeDetails = {person, employee};
console.log(employeeDetails);