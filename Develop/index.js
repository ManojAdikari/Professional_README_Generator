
const inquirer = require('inquirer');
const fs = require('fs');

const README_Generator = ({Title, Description, Installation, Usage,Contribution,Test, Licence,   Github, Email}) =>

`README.md
# ${Title}!
![Github licence](https://img.shields.io/badge/license-${Licence}-blue.svg)

\`\`\`
## Description:
${Description}
\`\`\`

## Table of Contents:<br />

- [Installation](#installation)<br />

- [Usage](#usage)<br />

- [Contributing](#contributing)<br />

- [Testing](#testing)<br />

- [Github](#my_github_profile)<br />

- [Licence](#license)<br />

- [Questions](#questions)<br />

## Installation:
To install the necessary dependancies please run the following command:
\`\`\`
${Installation}
\`\`\`

## Usage:
\`\`\`
${Usage}
\`\`\`
## Contributing:
\`\`\`
${Contribution}
\`\`\`
## Testing:

\`\`\`
${Test}
\`\`\`



## My GitHub profile:
\`\`\`
This is My GitHub profile; ${Github}
[see my GitHub profile ](https://github.com/ManojAdikari)

\`\`\`

## License:
\`\`\`
This project is licensed under; ${Licence}
\`\`\`

## Questions:
[Please use this this video url for more information about this application ](https://github.com/ManojAdikari/Professional_README_Generator)<br />
[see this project Repositorie ](https://github.com/ManojAdikari/Professional_README_Generator)<br />
[Clone this project](https://github.com/ManojAdikari/Professional_README_Generator.git) <br />
[Clone this project](git@github.com:ManojAdikari/Professional_README_Generator.git)<br />
If you have any questions about this project please feel free to reach  via email at [${Email}](mailto:${Email}).`;

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter your project title:',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Please enter your project description:',
      name: 'Description',
    },
    {
        type: 'input',
        message: 'Please enter project installation instructions:',
        name: 'Installation',
      },
      {
        type: 'input',
        message: 'Please enter project usage information:',
        name: 'Usage',
      },
      {
        type: 'input',
        message: 'Please enter project contribution guidelines:',
        name: 'Contribution',
      },
      {
        type: 'input',
        message: 'Please enter project test instructions:',
        name: 'Test',
      },
   
    {
        type: 'list',
        message: 'Select which Licence you wish to use:',
        name: 'Licence',
        choices: ['MIT', 'None', 'Apache_License_2.0', 'GNU_General_Public_License_v3.0', 'MIT_License', 'Boost_Software_License_1.0', 'Creative_Commons_Zero_v1.0_Universal', 'Eclipse_Public_License_2.0', 'GNU_Affero_General_Public_License_v3.0', 'GNU_General_Public_License_v2.0', 'GNU_Lesser_General_Public_License_v2.1', 'Mozilla_Public_License_2.0', 'The_Unlicense'],
    },
    {
        type: 'input',
        message: 'Please enter your GitHub user name:',
        name: 'Github',
       },
    {
      type: 'input',
      message: 'Please enter your email address:',
      name: 'Email',
    },
    
  ])

  .then((response) => {
    const htmldata = README_Generator(response);
        fs.writeFile('README.md', htmldata, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });