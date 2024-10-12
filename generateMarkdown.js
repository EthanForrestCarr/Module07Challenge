const licenseBadge = {
  'Academic Free License v3.0': 'AFL--3.0',
  'Apache License 2.0': 'Apache--2.0',
  'Artistic License 2.0': 'Artistic--2.0',
  'Boost Software License 1.0': 'Boost--1.0',
  'BSD 2-clause "Simplified" License': 'BSD--2--Clause',
  'BSD 3-clause "New" or "Revised" License': 'BSD--3--Clause',
  'BSD 3-clause Clear License': 'BSD--3--Clause--Clear',
  'BSD 4-clause "Original" or "Old" License': 'BSD--4--Clause',
  'BSD Zero-Clause License': '0BSD',
  'Creative Commons Zero v1.0 Universal': 'CC0--1.0',
  'Creative Commons Attribution 4.0': 'CC--BY--4.0',
  'Creative Commons Attribution Share Alike 4.0': 'CC--BY--SA--4.0',
  'Do What The F*ck You Want To Public License': 'WTFPL',
  'Eclipse Public License 1.0': 'EPL--1.0',
  'Eclipse Public License 2.0': 'EPL--2.0',
  'European Union Public License 1.1': 'EUPL--1.1',
  'GNU Affero General Public License v3.0': 'AGPL--3.0',
  'GNU General Public License v2.0': 'GPL--2.0',
  'GNU General Public License v3.0': 'GPL--3.0',
  'GNU Lesser General Public License v2.1': 'LGPL--2.1',
  'GNU Lesser General Public License v3.0': 'LGPL--3.0',
  'ISC License': 'ISC',
  'LaTeX Project Public License v1.3c': 'LPPL--1.3c',
  'Microsoft Public License': 'MS--PL',
  'MIT License': 'MIT',
  'Mozilla Public License 2.0': 'MPL--2.0',
  'Open Software License 3.0': 'OSL--3.0',
  'PostgreSQL License': 'PostgreSQL',
  'SIL Open Font License 1.1': 'OFL--1.1',
  'The Unlicense': 'Unlicense',
  'Universal Permissive License v1.0': 'UPL--1.0',
  'zLib License': 'Zlib'
};

const licenseLink = {
  'Academic Free License v3.0': 'AFL-3.0',
  'Apache License 2.0': 'Apache-2.0',
  'Artistic License 2.0': 'Artistic-2.0',
  'Boost Software License 1.0': 'BSL-1.0',
  'BSD 2-clause "Simplified" License': 'BSD-2-Clause',
  'BSD 3-clause "New" or "Revised" License': 'BSD-3-Clause',
  'BSD 3-clause Clear License': 'BSD-3-Clause-Clear',
  'BSD 4-clause "Original" or "Old" License': 'BSD-4-Clause',
  'BSD Zero-Clause License': '0BSD',
  'Creative Commons Zero v1.0 Universal': 'CC0-1.0',
  'Creative Commons Attribution 4.0': 'CC-BY-4.0',
  'Creative Commons Attribution Share Alike 4.0': 'CC-BY-SA-4.0',
  'Do What The F*ck You Want To Public License': 'WTFPL',
  'Eclipse Public License 1.0': 'EPL-1.0',
  'Eclipse Public License 2.0': 'EPL-2.0',
  'European Union Public License 1.1': 'EUPL-1.1',
  'GNU Affero General Public License v3.0': 'AGPL-3.0',
  'GNU General Public License v2.0': 'GPL-2.0',
  'GNU General Public License v3.0': 'GPL-3.0',
  'GNU Lesser General Public License v2.1': 'LGPL-2.1',
  'GNU Lesser General Public License v3.0': 'LGPL-3.0',
  'ISC License': 'ISC',
  'LaTeX Project Public License v1.3c': 'LPPL-1.3c',
  'Microsoft Public License': 'MS-PL',
  'MIT License': 'MIT',
  'Mozilla Public License 2.0': 'MPL-2.0',
  'Open Software License 3.0': 'OSL-3.0',
  'PostgreSQL License': 'PostgreSQL',
  'SIL Open Font License 1.1': 'OFL-1.1',
  'The Unlicense': 'Unlicense',
  'Universal Permissive License v1.0': 'UPL-1.0',
  'zLib License': 'Zlib'
};

function renderLicenseBadge(license) {
  const badge = licenseBadge[license];
  const link = licenseLink[license];
  if (badge && link) {
    return `[![License Badge](https://img.shields.io/badge/License-${badge}-blue.svg)](https://opensource.org/licenses/${link})`;
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  const link = licenseLink[license];
  if (link) {
    return `[Learn more about ${license} here](https://opensource.org/licenses/${link})`;
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license) {
    return `
This project is licensed under the ${license}.  
${renderLicenseLink(license)}
    `;
  } else {
    return '';
  }
}

function formatCollaborators(collaborators) {
  if (!collaborators || collaborators.length === 0) {
    return '';
  }

  return collaborators.map(collab => `- [${collab.name}](${collab.gitHub})`).join('\n');
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.motivation} ${data.why} ${data.problem} ${data.learn} ${data.standOut}

${data.tableOfContents ? `
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions?](#questions)` : ''}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${formatCollaborators(data.collaborators) || 'No collaborators listed.'}

## License
${renderLicenseSection(data.license)}

## Tests
${data.tests}

## Questions?
Find me on GitHub: [${data.gitHub}](https://github.com/${data.gitHub})  
For any additional questions, reach out via email: ${data.email}
`;
}

export default generateMarkdown;