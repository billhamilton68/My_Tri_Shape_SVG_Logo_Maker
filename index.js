const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./utils/svgUtils');

const questions = [
  {
    name: 'text',
    message: 'Please enter the character(s) you want to appear on your logo (up to three characters):',
    validate: (input) => input.length <= 3,
  },
  {
    type: 'input',
    name: 'txtColor',
    message: 'Enter the color you would like the characters of your logo to be (color keyword or hex code):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose the shape of your logo (use the up and down arrows to select a shape, then press Enter):',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'logoColor',
    message: 'Enter the color for your logo (color keyword or hex code):',
  }
];

inquirer.prompt(questions).then((answers) => {
  const { text, txtColor, shape, logoColor } = answers;
  createSVG(text, txtColor, shape, logoColor);
  
  console.log('Generated logo.svg');
});
