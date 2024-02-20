// Task 3: Object Methods
// run for the hills
// 7. Create an object named `rectangle` with properties for `width` and `height`.
// 8. Add a method named `calculateArea` to the `rectangle` object that returns the area of the rectangle.
// 9. Invoke the `calculateArea` method and store the result in a variable, then print it to the console.
const rectangle = {
  width: 10,
  height: 10,
  calculateArea: function() {
    return this.width * this.height;
  }
};

console.log(rectangle.calculateArea());

