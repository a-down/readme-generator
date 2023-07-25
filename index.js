// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'projectTitle',
  },
  {
    type: 'input',
    message: 'Enter your project description.',
    name: 'projectDescription',
  },
  {
    type: 'input',
    message: 'Enter installation directions for the application.',
    name: 'projectInstallation',
  },
  {
    type: 'input',
    message: 'Enter usage information for the application.',
    name: 'projectUsage',
  },
  {
    type: 'input',
    message: 'Enter directions for others to contribute to your project.',
    name: 'projectContributions',
  },
  {
    type: 'input',
    message: 'Provide directions on how to test the application.',
    name: 'projectTests',
  },
  {
    type: 'list',
    message: 'Please select the license you used for the project.',
    name: 'projectLicense',
    choices: ['MIT', 'Apache', 'The Unlicense', 'Creative COmmons Zero', 'Mozilla Public License 2.0'],
  },
  {
    type: 'input',
    message: 'Enter your GitHub username.',
    name: 'projectGitHub',
  },
  {
    type: 'input',
    message: 'Enter your email.',
    name: 'projectEmail',
  }
];


inquirer
  .prompt(questions)
  .then((responses) => console.log(responses));





// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();





// what is your project title

// "Description"
// Enter description

// "Installation"
// Installation instructions
  // are there any?
  // enter if so

// "Usage"
// Usage Information
  // does the user need usage instructions
  // enter if so

// "Contributing"
// Contribution Guidelines
  // do you want contribution guidelines
  // enter if so

// "Tests"
// Test Instructions
  // do you want to provide
  // enter if so

// "License"
// Choose a license for your project 
  // add badge to top
  // add description to "License" section

// "Questions"
// enter GitHub username
  // link to github profile is created
// enter Email
  // added to sections with instructions on how to reach creator

// "Table of Contents"
// Add near the top when done
// include links to the corresponding sections of the ReadMe