// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkDown');
const generateMarkdown = require('./utils/generateMarkDown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your github project name?',
        name: 'project',
      },
      {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
      },
      {
        type: 'list',
        message: 'What kind of license is your project?',
        name: 'license',
        choices: ['MIT','APACHE','GPL','BSD','none'],
      },
      {
        type: 'input',
        message: 'What command should be used to install dependencies',
        name: 'install',
        default:'npm i',
      },
      {
        type: 'input',
        message: 'What command should be used to run tests?',
        name: 'tests',
        default:'npm test'
      },
      {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'collab',
      },
   ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err)=> err ? console.log(err ) : console.log("Read me created"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((res) =>
    {
         var data = generateMarkdown(res)
        
        writeToFile('readme.md',data)
    })
}

// Function call to initialize app
init();
