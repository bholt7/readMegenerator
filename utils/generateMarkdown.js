// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license) {
    return `![Badge](https://img.shields.io/badge/license-${data.license}-orange)`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const licenseType = (data.license);
  if (licenseType === "MIT") {
    licenseInfo = `[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)]`

  }
  if (licenseType === "Apache") {
    licenseInfo = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }
  if (licenseType === "GNU") {
    licenseInfo = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-orange.svg)]`
  }
  if (licenseType === "ISC") {
    licenseInfo = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license) {
    return `##license`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributions](#Contributions)
  * [test](#Test)
  * [contact](#Contact)

  ## Installation
   This app does not${data.installation}

  ## Usage
  This app can be used to${data.usage}

  ${renderLicenseSection(data)}
  ${renderLicenseLink(data)}

  ## Contributions
  ${data.contributions}

  ## Test
   ${data.test}

  ## Contact
 ${data.contact} 



`;
}

module.exports = generateMarkdown;
