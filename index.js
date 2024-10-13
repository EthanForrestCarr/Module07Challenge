import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./generateMarkdown.js";

let collaborators = [];

function addCollaborator() {
    return inquirer.prompt([
        {
            type: "input",
            name: "collaborator",
            message: "Enter a collaborator's name (or press Enter to skip):"
        },
        {
            type: "input",
            name: "collaboratorGitHub",
            message: "Enter the GitHub profile for this collaborator:",
            when: (answers) => answers.collaborator !== ''
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Would you like to add another collaborator?",
            default: false
        }
    ]).then((answers) => {
        if (answers.collaborator) {
            collaborators.push({
                name: answers.collaborator,
                gitHub: answers.collaboratorGitHub
            });
        }
        if (answers.addMore) {
            return addCollaborator();
        } else {
            return collaborators;
        }
    });
}

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your Project?"
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation for this project?"
    },
    {
        type: "input",
        name: "why",
        message: "Why did you build this project?"
    },
    {
        type: "input",
        name: "problem",
        message: "What problem does your project solve?"
    },
    {
        type: "input",
        name: "learn",
        message: "What did you learn during this project?"
    },
    {
        type: "input",
        name: "standOut",
        message: "What makes your project stand out?"
    },
    {
        type: "confirm",
        name: "tableOfContents",
        message: "Would you like to include a table of contents?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
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
    },
    {
        type: "input",
        name: "tests",
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    },
    {
        type: "input",
        name: "gitHub",
        message: "Enter your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address."
    }
];

const creditsQuestion = {
    type: "confirm",
    name: "credits",
    message: "Would you like to credit any collaborators?",
    default: false
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README file generated successfully!')
    );
}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            inquirer.prompt({
                type: "confirm",
                name: "contributing",
                message: "Would you like to list any contributors?",
                default: false
            })
                .then((contributingAnswer) => {
                    if (contributingAnswer.contributing) {
                        addCollaborator()
                            .then((collaborators) => {
                                answers.collaborators = collaborators.length > 0 ? collaborators : [];
                                const readMe = generateMarkdown(answers);
                                writeToFile('README.md', readMe);
                            });
                    } else {
                        answers.collaborators = [];
                        const readMe = generateMarkdown(answers);
                        writeToFile('DemoREADME.md', readMe);
                    }
                });
        });
}

init();