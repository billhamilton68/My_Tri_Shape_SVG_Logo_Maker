const fs = require('fs');
const { Triangle, Circle, Square } = require('./shape');


// The createSVG function generates an SVG file with the specified text, text color, shape, and shape color.
function createSVG(text, txtColor, shape, logoColor) {
  let shapeObject;

  switch (shape) {
    case 'circle':
      shapeObject = new Circle();
      break;
    case 'triangle':
      shapeObject = new Triangle();
      break;
    case 'square':
      shapeObject = new Square();
      break;
  }

  // Set the color of the shape object.
  shapeObject.setColor(logoColor);

  const svgContent = `
    <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
      ${shapeObject.render()}
      <text x="150" y="100" fill="${txtColor}" font-size="50" font-weight="bold" text-anchor="middle" dominant-baseline="central">${text}</text>
    </svg>
  `;

  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
}

// Export the createSVG function for use in other modules.
module.exports = { createSVG };