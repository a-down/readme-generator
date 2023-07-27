// tests the dependency
// function testRequire() {
//   console.log('it works!!!')
// }



// TODO: Create a function to generate markdown for README
// function to generate title section of markdown
function generateTitle(data) {
  return (
    (data === '') ? '' : `# ${data}\n`
    )
}



// function to generate license badge
function generateLicenseBadge(data) {
  let badgeLink
  if (data === 'MIT'){badgeLink = 'https://img.shields.io/badge/License-MIT-yellow.svg'}
  if (data === 'Apache'){badgeLink = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'}
  if (data === 'The Unlicense'){badgeLink = 'https://img.shields.io/badge/license-Unlicense-blue.svg'}
  if (data === 'Creative Commons Zero'){badgeLink = 'https://licensebuttons.net/l/zero/1.0/80x15.png'}
  
  return (data === 'none') 
    ? '' 
    : `![GitHub License](${badgeLink})`
}



// function to generate most markdown sections
function generateMarkdown(title, data) {
  return (
    (data === '') ? '' : `${title}\n${data}\n`
    )
}


// function to generate license section and license link
function generateLicenseLink(title, data) {
  let licenseLink
  if (data === 'MIT'){licenseLink = 'https://opensource.org/licenses/MIT'}
  if (data === 'Apache'){licenseLink = 'https://opensource.org/licenses/Apache-2.0'}
  if (data === 'The Unlicense'){licenseLink = 'https://choosealicense.com/licenses/unlicense/'}
  if (data === 'Creative Commons Zero'){licenseLink = 'http://creativecommons.org/publicdomain/zero/1.0/'}

  return (data === 'none') 
    ? '' 
    : `${title}\nI am using the [${data}](${licenseLink}) License.`
}



// function to generate table of contents markdown
function generateTableOfContents(data) {
  // console.log(data)
  const arr = []

  // push the sections that are needed in the readme into an array
  // console.log(data.projectDescription)
  if (data.projectDescription !== '') {arr.push('[Description](#description)\n \n')}
  if (data.projectInstallation !== '') {arr.push('[Installation](#installation)\n \n')};
  if (data.projectLicense !== '') {arr.push('[License](#license)\n \n')};
  if (data.projectUsage !== '') {arr.push('[Usage](#usage)\n \n')};
  if (data.projectContributions !== '') {arr.push('[Contributing](#contributing)\n \n')};
  if (data.projectTests !== '') {arr.push('[Tests](#tests)\n \n')};
  if (data.projectGitHub !== '' || data.projectEmail !== '') {arr.push('[Questions](#questions)\n')};

  // turn the array into a string
  // console.log(arr)
  const string = arr.join('')
  // console.log(string)

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
    return `${title}\nPlease contact me at [${data2}](${data2}) if you have any questions or issues concerning the application.`
  } else {
    return `${title}\nPlease visit [https://github.com/${data}](https://github.com/${data}) for my GitHub profile.
    
Please contact me at [${data2}](${data2}) if you have any questions about the application.`
}}



// exporting functions to index.js
module.exports = {
  title: generateTitle,
  // testRequire: testRequire,
  markdown: generateMarkdown,
  questions: generateQuestions,
  contents: generateTableOfContents,
  licenseBadge: generateLicenseBadge,
  licenseLink: generateLicenseLink,
}