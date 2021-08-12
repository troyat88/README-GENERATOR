//REQUIRED NODE PACKAGES
const inquirer = require('inquirer');
const fs = require('fs');

// Template for README

function generateREADME(answers) {

   return `# ${answers.title}
by ${answers.author}

## Description
${answers.description}

## Table of contents
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contributing)
[Tests](#Tests)
    
## Installation
${answers.install}
    
## Usage
${answers.usage}
    
## Contributing
${answers.contribute}
    
## Tests
${answers.test}
    
## License
[MIT](https://choosealicense.com/licenses/mit/)

## Questions
${answers.github}
${answers.email}`;
}

// ARRAY OF PROMPTS FOR USER INPUT TO README
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of this project?',
    },
    {
      type: 'input',
      name: 'author',
      message: 'Name of person who wrote program?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What does this application do?',
    },
    {
      type: 'input',
      name: 'intstall',
      message: 'How can someone install this application',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'define your test instructions.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
  ])
  .then((answers) => {

    const READMEcontent = generateREADME(answers);

    fs.writeFile('README.md', READMEcontent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });

  
 
