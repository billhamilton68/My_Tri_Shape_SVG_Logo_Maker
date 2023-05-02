
// Import the Triangle, Circle, and Square classes from the shape module.
const { Triangle, Circle, Square } = require('./shape');

// Test the render method of the Triangle class.
test('Triangle render', () => {
  const triangle = new Triangle();
  triangle.setColor('blue');
  expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle render', () => {
  const circle = new Circle();
  circle.setColor('red');
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
});

test('Square render', () => {
  const square = new Square();
  square.setColor('green');
  expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
});