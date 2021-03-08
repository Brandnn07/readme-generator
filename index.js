// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./assets/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    'What is the name of your project?',
    'Can you give a brief description your project?',
    'What are the instructions to installing your project?',
    'Please enter information on usage',
    'Please enter guidelines on contribution to your project',
    'What are the intructions to testing?',
    'Please choose a license',
    'What is your Github username?',
    'What is your email?',
];


// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
inquirer
        .prompt([
    {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'name',
    },
    {
    type: 'input',
    message: questions[1],
    name: 'description',
    },
    {
    type: 'input',
    message: questions[2],
    name: 'instal',
    },
    {
    type: 'input',
    message: questions[3],
    name: 'usage',
    },
    {
    type: 'input',
    message: questions[4],
    name: 'contribution',
    },
    {
    type: 'input',
    message: questions[5],
    name: 'test',
    },
    {
    type: 'list',
    message: questions[6],
    name: 'license',
    choices: [
        'MIT', 'GPL v3', 'Apache'
    ]
    },
    {
    type: 'input',
    message: questions[7],
    name: 'github',
    },
    {
    type: 'input',
    message: questions[8],
    name: 'email',
    }
])
.then((data) => {
fs.writeFile('README.md', generateMarkdown(data),
(err) => err ? console.error(err) : console.log('Your readme is generated!'))
})
}

// TODO: Create a function to initialize app
function init() {
            writeToFile();
}

// Function call to initialize app
init();
