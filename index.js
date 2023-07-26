// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const util = require('./utils/util')
const questions = require('./utils/questions')

console.log(questions.questions)



// TODO: Create an array of questions for user input
// in questions.js in util folder



// run inquirer npm to get responses in the command line
// function is called with the prompt inside the init() function
function start() {
  inquirer
    .prompt(questions.questions)
    .then((responses) => {
      util.testRequire();
      console.log(responses)
      createReadmeContent(responses)
    });
}



// function to create Readme content from the inquirer prompts (called above)
function createReadmeContent(data) {

  // creates variable with content for the readme
  const readmeContent = 

`${util.title(data.projectTitle)}
${util.markdown('## Description', data.projectDescription)}
${util.contents('## Table of Contents', data)}
${util.markdown('## Installation', data.projectInstallation)}
${util.markdown('## Usage', data.projectUsage)}
${util.markdown('## License', data.projectLicense)}
${util.markdown('## Contributions', data.projectContributions)}
${util.markdown('## Tests', data.projectTests)}
${util.questions('## Questions', data.projectGitHub, data.projectEmail)}
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