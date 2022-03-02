// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('utils');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title",

    },
    {
        type: "input",
        message: "What is your projects Description",
        name: "Description",

    },
    {
        type: "input",
        message: "Table of Contents",
        name: "Table of Contents",

    },
    {
        type: "input",
        message: "How can your app be installed?",
        name: "Install",
    },
    {
        type: "input",
        message: "What is the purpose of your project, how can it be used?",
        name: "Usage",
    },
    {
        type: "list",
        message: "What licsence did you use for this project?",
        choices: [""],
        name: "Licenses",
    },
    {
        type: "input",
        message: "Contributions?",
        name: "Link",
    },
    {
        type: "input",
        message: "How can the app be tested?",
        name: "Command",
    },
    {
        type: "input",
        message: "For inquiries, who can be reached out to?",
        name: "Contact",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
