// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![githublicense](https://img.shields.io/badge/license-${license}-green.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[license](#license)`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  if (license !== 'None') {
  return `## license section\n
This project is licensed under ${license}  
  `
}
return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Name}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  *[Description](#Description)
  *[Usage](#Usage)
  *[Issues](#Issues)
  *[Contribution](#Contribution)
  *[URL](#URL)
  *${renderLicenseLink(data.license)}

  ## Description
  ${data.Description}

  ## Usage
  ${data.Usage}

  ## Issues
  ${data.Issues}

  ## Contribution
  ${data.Contribution}

  ## URL
  ${data.URL}

  ${renderLicenseSection(data.license)}

  ## Questions
  For questions contact me at [Email](mailto:${data.email})

  Check out my Github at [${data.github}](https://github.com/${data.github}/)

`;
}

module.exports = generateMarkdown;
