const fs = require('fs');

function createSVG(text, txtColor, shape, logoColor) {
  const shapeWidth = 200;
  const shapeHeight = 100;
  const shapeCenterX = 150;
  const shapeCenterY = 100;
  const textFontSize = Math.min(shapeWidth / 3, shapeHeight / 3); // Adjust font size to fit within the shape

  let svgContent = `
    <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
  `;

  switch (shape) {
    case 'circle':
      svgContent += `<circle cx="${shapeCenterX}" cy="${shapeCenterY}" r="50" fill="${logoColor}" stroke-width="0" />`;
      break;
    case 'triangle':
      svgContent += `<polygon points="${shapeCenterX},${shapeCenterY - 50} ${shapeCenterX - 50},${shapeCenterY + 50} ${shapeCenterX + 50},${shapeCenterY + 50}" fill="${logoColor}" stroke-width="0" />`;
      break;
    case 'square':
      svgContent += `<rect x="${shapeCenterX - shapeWidth / 2}" y="${shapeCenterY - shapeHeight / 2}" width="${shapeWidth}" height="${shapeHeight}" fill="${logoColor}" stroke-width="0" />`;
      break;
  }

  svgContent += `
      <text x="${shapeCenterX}" y="${shapeCenterY}" fill="${txtColor}" font-size="${textFontSize}" font-weight="bold" text-anchor="middle" dominant-baseline="central">${text}</text>
    </svg>
  `;

  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
}

module.exports = { createSVG };