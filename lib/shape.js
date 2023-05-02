
// Shape is the base class for all shapes
class Shape {
    constructor() {
      this.color = 'black';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('render method not implemented');
    }
  }
  
  // Triangle is a class that inherits from Shape.
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Circle is a class that inherits from Shape.
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  // Square is a class that inherits from Shape.
  class Square extends Shape {
    render() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  // Export the Triangle, Circle, and Square classes for use in other modules.
  module.exports = { Triangle, Circle, Square };