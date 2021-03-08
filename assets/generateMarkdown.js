// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT_Badge-red.svg)](https://opensource.org/licenses/MIT)'
  };
  if (license === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3_Badge-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  };
  if (license === 'Apache') {
    return '[![License: Apache](https://img.shields.io/badge/License-Apache_Badge-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
 
${renderLicenseBadge(data.license)}

* [Description](#description)
* [Installation](#install)
* [Usage](#usage)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)

## Description
_______________________________

${data.description}

## Installation 
_______________________________

${data.instal}

## Usage
_______________________________

${data.usage}

## Tests
_______________________________

${data.test}

## Contributing
_______________________________

${data.contribution}

## License 
_______________________________

${data.license}


## Github
_______________________________

${data.github}

## Email
_______________________________

${data.email}

`;}

module.exports = generateMarkdown;
