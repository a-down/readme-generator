exports.questions = [
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'projectTitle',
    default: '',
  },
  {
    type: 'input',
    message: 'Enter a short project description.',
    name: 'projectDescription',
  },
  {
    type: 'input',
    message: 'Enter the commands needed to run the application.',
    name: 'projectInstallation',
  },
  {
    type: 'input',
    message: 'Enter usage directions that the user will need.',
    name: 'projectUsage',
  },
  {
    type: 'input',
    message: 'Enter directions for others to contribute to your project.',
    name: 'projectContributions',
  },
  {
    type: 'input',
    message: 'Enter the commands needed to run tests.',
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