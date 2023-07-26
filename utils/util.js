// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



// tests the dependency
function testRequire() {
  console.log('it works!!!')
}


// TODO: Create a function to generate markdown for README
// functions that generate read 
function generateTitle(data) {
  if (data === '') {
    return ''
  } else {
  return `# ${data}\n`;
}}


// function to generate regular markdown sections
function generateMarkdown(title, data) {
  if (data === '') {
    return ''
   } else { 
    return `${title}
${data}
`
}}


// function to generate table of contents markdown
function generateTableOfContents(data) {
  console.log(data)
  const array = []

  if (data.projectDescription !== ''){array.push('[Description](#Description)\n \n')}
  if (data.projectInstallation !== ''){array.push('[Installation](#Installation)\n \n')}
  if (data.projectUsage !== ''){array.push('[Usage](#Usage)\n \n')}
  if (data.projectContributions !== ''){array.push('[Contributions](#Contributions)\n \n')}
  if (data.projectTests !== ''){array.push('[Tests](#Tests)\n \n')}
  if (data.projectLicense !== ''){array.push('[License](#License)\n \n')}
  if (data.projectGitHub !== '' || data.projectEmail !== ''){array.push('[Questions](#Questions)\n \n')}

  console.log(array)
  const string = array.join(' ')
  console.log(string)

  return `## Table of Contents \n ${string}`
}


// projectTitle, 
// projectDescription, 
// projectInstallation, 
// projectUsage, 
// projectContributions, 
// projectTests, 
// projectLicense, 
// projectGitHub, 
// projectEmail


// ## Table of Contents

// [Description](#description)

// [Installation](#installation)

// [Usage](#usage)

// [License](#license)

// [Contributing](#contributing)

// [Tests](#tests)

// [Questions](#questions)




// function to generate markdown in questions sections
function generateQuestions(title, data, data2) {
  if (data === '' && data2 === '') {
    return ''
  } else if (data ==! '' && data2 === ''){ 
    return `${title}\nPlease visit [https://github.com/${data}](https://github.com/${data}) for my GitHub profile.`
  } else if (data === '' && data2 !== ''){
    return `${title}\nPlease contact me at [${data2}](${data2}) if you have any questions about the application.`
  } else {
    return `${title}\nPlease visit [https://github.com/${data}](https://github.com/${data}) for my GitHub profile.
    
Please contact me at [${data2}](${data2}) if you have any questions about the application.`
}}


function testRequire() {
  console.log('it works!!!')
}

module.exports = {
  title: generateTitle,
  testRequire: testRequire,
  markdown: generateMarkdown,
  questions: generateQuestions,
  contents: generateTableOfContents,
}


    // projectTitle
    // projectDescription, 
    // projectInstallation, 
    // projectUsage, 
    // projectContributions, 
    // projectTests, 
    // projectLicense, 
    // projectGitHub, 
    // projectEmail