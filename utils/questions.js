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
    default: '',
  },
  {
    type: 'input',
    message: 'Enter the commands needed to run the application.',
    name: 'projectInstallation',
    default: '',
  },
  {
    type: 'input',
    message: 'Enter usage directions that the user will need.',
    name: 'projectUsage',
    default: '',
  },
  {
    type: 'input',
    message: 'Enter directions for others to contribute to your project.',
    name: 'projectContributions',
    default: '',
  },
  {
    type: 'input',
    message: 'Enter the commands needed to run tests.',
    name: 'projectTests',
    default: '',
  },
  {
    type: 'list',
    message: 'Please select the license you used for the project.',
    name: 'projectLicense',
    choices: ['MIT', 'Apache', 'The Unlicense', 'Creative Commons Zero', 'None'],
  },
  {
    type: 'input',
    message: 'Enter your GitHub username.',
    name: 'projectGitHub',
    default: '',
  },
  {
    type: 'input',
    message: 'Enter your email.',
    name: 'projectEmail',
    default: '',
  }
];