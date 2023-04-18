//Packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const licenses = ['None','Apache','PostgreSQL','MIT','Mozilla','GPL'];

//Criteria Questions
const questions = [
    {
        type: 'input',
        message: 'Enter Project Title: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter Project Description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter Installation Process: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter Project Usage: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter Contribution Guidelines: ',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter Test Instructions: ',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Enter Project License: ',
        choices: licenses,
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter Github Username: ',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter Email Address: ',
        name:'email',
    }
];

//Write README Function
function writeToFile(data) {
    const fileName = "./dist/README.md";

    fs.writeFile(fileName, data, err => {
        if(err){
            return console.log(err);
        }
        console.log("Your README file has been generated!")
    });
}

//Initialize Function
function init() {

   inquirer.prompt(questions)
    .then (data => writeToFile(generateMarkdown(data)))
}

//Calling Initialize Function
init();