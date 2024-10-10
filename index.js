// TODO: Include packages needed for this application

import inquirer from "inquirer"
import fs from "fs"
import generateMarkdown from "generateMarkdown.js"

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
            'Apache license 2.0',
            'Artistic license 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'BSD 3-clause Clear license',
            'BSD 4-clause "Original" or "Old" license',
            'BSD Zero-Clause license'
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readMe = generateMarkdown(answers); /* Answers or Data? */
            writeToFile('README.md', readMe)
        })
}

// Function call to initialize app
init();


/*# <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
*/
