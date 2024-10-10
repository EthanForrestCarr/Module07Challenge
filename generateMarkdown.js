// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License Badge](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[Learn more about ${license} here](https://opensource.org/licenses/${license.replaceAll(' ', '-')})`;
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
This project is licensed under the ${license} License.  
${renderLicenseLink(license)}
    `;
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.motivation} + ${data.why} + ${data.problem} + ${data.learn} + ${data.standOut} /* anticipate sentence structuring? FIX THIS SOON */

${data.tableOfContents ? `
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)` : ''}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${renderLicenseSection(data.license)}
`;
}

export default generateMarkdown;