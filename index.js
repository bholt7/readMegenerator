// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
        message: "What is needed for your app to run?",
        name: "Install",
    },
    {
        type: "input",
        message: "What is the purpose of your project, how can it be used?",
        name: "Usage",
    },
    {
        type: "list",
        message: "What licene did you use for this project?",
        choices: ["MIT", "Apache", "GNU", "ISC",],
        name: "License",
    },
    {
        type: "input",
        message: "Contributions?",
        name: "Contributions",
    },
    {
        type: "input",
        message: "How can the app be tested?",
        name: "Test",
    },
    {
        type: "input",
        message: "For inquiries, who can be reached out to?",
        name: "Contact",
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.error(err) : console.log('ReadME was generated')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (answers) {

        const markdown = generateMarkdown(answers)
        fs.writeFile("README.md", markdown, err => {
            err ? console.error(err) : console.log("Successful")
        })

    })
};

// Function call to initialize app
init();
