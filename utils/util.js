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
    (data === '') ? '' : `${title}\n${data}`
    )
}



// function to generate table of contents markdown
function generateTableOfContents(data) {
  console.log(data)
  const array = []

  // push the sections that are needed in the readme into an array
  if (data.projectDescription !== ''){array.push('[Description](#Description)\n \n')}
  if (data.projectInstallation !== ''){array.push('[Installation](#Installation)\n \n')}
  if (data.projectUsage !== ''){array.push('[Usage](#Usage)\n \n')}
  if (data.projectContributions !== ''){array.push('[Contributions](#Contributions)\n \n')}
  if (data.projectTests !== ''){array.push('[Tests](#Tests)\n \n')}
  if (data.projectLicense !== ''){array.push('[License](#License)\n \n')}
  if (data.projectGitHub !== '' || data.projectEmail !== ''){array.push('[Questions](#Questions)\n \n')}

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