const fs = require('fs');
const inquirer = require('inquirer');




const questions = [
    {
        name: 'text',
        message: 'Please enter the charecter(s) you want to appear on your Logo. (up to three characters):',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'txtColor',
        message: 'Enter color you would like the letters of your logo to be. (color keyword or hex code):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape of your LOGO:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'logoColor',
        message: 'Enter the background color for your Logo. (color keyword or hex code):',
    }
  ];
  