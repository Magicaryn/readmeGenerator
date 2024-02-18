const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, description, usage, issues, contribution, URL}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-compatible" content="ie=edge">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
<title>Document</title>
</head>
<body>
    <header>
    <div class="container">
 <h1>${name}</h1>
<h2>${description}</h2>
<p>${usage}</p>
<p>${issues}</p>
<p>${contribution}</p>
<p>${URL}</p>
     </div>
  </header>
</body>
</html>`;

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
   
  ])

  .then((response) => {
    const htmlContent = generateHTML(response);

    fs.writeFile(`index.html`, htmlContent, (err) =>
    err ? console.log(err) : console.log(`successfully created index.html!`)
    );
  });

//     `;
//     fs.appendFile('index.html', htmlContent, (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log('Responses written to index.html');
//       }
//     });
//   });












