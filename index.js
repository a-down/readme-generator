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



// run inquirer npm to get responses in the command line
// function is called with the prompt inside the init() function
function start() {
  inquirer
    .prompt(questions)
    .then((responses) => {
      console.log(responses)
      createReadmeContent(responses)
    });
}



// function to create Readme content from the inquirer prompts (called above)
function createReadmeContent(data) {

  // creating variables to use in readme content
  const {
    projectTitle, 
    projectDescription, 
    projectInstallation, 
    projectUsage, 
    projectContributions, 
    projectTests, 
    projectLicense, 
    projectGitHub, 
    projectEmail
  } = data;
  console.log(projectTitle)

  // creates variable with content for the readme
  const readmeContent = 

`# ${projectTitle}

## Description
${projectDescription}

## Table of Contents

## Installation
${projectInstallation}

## Usage
${projectUsage}

##License
${projectLicense}

## Contributing
${projectContributions}

## Tests
${projectTests}

## Questions
Please visit [https://github.com/${projectGitHub}](https://github.com/${projectGitHub}) for my GitHub profile.

Please contact me at [${projectEmail}](${projectEmail}) if you have any questions about the application.
`

  // runs writeToFile function to the name of 'README.md with readmeContent from above 
  writeToFile('README2.md', `${readmeContent}`)
  }



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => 
  error ? console.log('Try again!') : console.log('Success!'))
}



// TODO: Create a function to initialize app
// Prompt asking the use if they are ready to start the application
function init() {
  inquirer
    .prompt(
      {
        type: 'confirm',
        message: 'Are you ready to start creating your README?',
        name: 'appStart',
      }
    )
    .then((response) => {
      // console.log(response.appStart)
      response.appStart === true ? start() : 
      (console.log('Let us know when you are ready!'),
      init())
    })
}
init();