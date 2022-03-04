// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license) {
    return `![Badge](https://img.shields.io/badge/license-${data.license}-orange)`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
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
function renderLicenseSection(license) {
  if(data.license) {
    return `##license`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}
  ##description:

  ## Table of Contents
  -[installation](#installation)
  -[usage](#usage)
  -[license](#license)
  -[contributions](#contributions)
  -[test](#test)
  -[contact](#contact)

  ##installation
  ${data.installation}

  ##usage
  ${data.usage}

  ${renderLicenseSection(data)}
  ${renderLicenseLink(data)}

  ##contributions
  ${data.contributions}

  ##test
  ${data.test}

  ##contact
  ${data.contact}
  github : 



`;
}

module.exports = generateMarkdown;
