// TODO: Include packages needed for this application

import inquirer from "inquirer"
import fs from "fs"
import generateMarkdown from "./generateMarkdown.js"

// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your Project?"
    }, {
        type: "input",
        name: "motivation",
        message: "What was your motivation?"
    }, {
        type: "input",
        name: "why",
        message: "Why did you build this?"
    }, {
        type: "input",
        name: "problem",
        message: "What problem does it solve?"
    }, {
        type: "input",
        name: "learn",
        message: "What did you learn?"
    }, {
        type: "input",
        name: "standOut",
        message: "What makes your project stand out?"
    }, {
        type: "confirm",
        name: "tableOfContents",
        message: "Do you need a table of contents?"
    }, {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    }, {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed."
    }, {
        type: "input",
        name: "credits",
        message: "List you collaborators, if any, with links to their GitHub profiles."
    }, {
        type: "list",
        name: "license",
        message: "License?",
        choices: [
            'Academic Free License v3.0',
            'Apache License 2.0',
            'Artistic License 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" License',
            'BSD 3-clause "New" or "Revised" License',
            'BSD 3-clause Clear License',
            'BSD 4-clause "Original" or "Old" License',
            'BSD Zero-Clause License',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F*ck You Want To Public License',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC License',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT License',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'The Unlicense',
            'Universal Permissive License v1.0',
            'zLib License'
        ]
    }, {
        type: "input",
        name: "gitHub",
        message: "Enter your GitHub username."
    }, {
        type: "input",
        name: "email",
        message: "Enter your email."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Written to File'));
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readMe = generateMarkdown(answers);
            writeToFile('README.md', readMe)
        })
};

// Function call to initialize app
init();