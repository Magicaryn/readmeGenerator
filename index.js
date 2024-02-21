const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the project name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Give a short description of the application and what inspired you to make it',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do you use the application?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'How do i report issues?',
      name: 'issues',
    },
    {
      type: 'input',
      message: 'How can i make contributions?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'URL to deployed application',
      name: 'URL',
    },
    {
      type: 'inpu',
      message: 'Type your email',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Type your github',
      name: 'github',
    },
    {
      type: 'list',
      message: 'What license is this under?',
      name: 'license',
      choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'None']
    }

  ])
   


  .then((response) => {
    console.log(response)
    const readmeContent = generateMarkdown(response);

    fs.writeFile(`readme.md`,readmeContent, (err) =>
      err ? console.log(err) : console.log(`successfully created readme!`)
    );
  });