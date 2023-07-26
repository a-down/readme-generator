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
// functions to generate title section of markdown
function generateTitle(data) {
  return (
    (data === '') ? '' : `# ${data}\n`
    )
}



// function to generate most markdown sections
function generateMarkdown(title, data) {
  return (
    (data === '') ? '' : `${title}\n${data}\n`
    )
}



// function to generate table of contents markdown
function generateTableOfContents(data) {
  console.log(data)
  const array = []

  // push the sections that are needed in the readme into an array
  if (data.projectDescription !== ''){array.push('[Description](#description)\n \n')}
  if (data.projectInstallation !== ''){array.push('[Installation](#installation)\n \n')}
  if (data.projectUsage !== ''){array.push('[Usage](#usage)\n \n')}
  if (data.projectContributions !== ''){array.push('[Contributions](#contributions)\n \n')}
  if (data.projectTests !== ''){array.push('[Tests](#tests)\n \n')}
  if (data.projectLicense !== ''){array.push('[License](#license)\n \n')}
  if (data.projectGitHub !== '' || data.projectEmail !== ''){array.push('[Questions](#questions)\n')}

  // turn the array into a string
  console.log(array)
  const string = array.join('')
  console.log(string)

  // return the string to index.js
  return `## Table of Contents \n${string}`
}



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



// function used to test dependency
function testRequire() {
  console.log('it works!!!')
}



// exporting functions to index.js
module.exports = {
  title: generateTitle,
  testRequire: testRequire,
  markdown: generateMarkdown,
  questions: generateQuestions,
  contents: generateTableOfContents,
}