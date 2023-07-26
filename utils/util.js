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

function generateMarkdown(title, data) {
  if (data === '') {
    return ''
   } else { 
    return `${title}
${data}
`
}}

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