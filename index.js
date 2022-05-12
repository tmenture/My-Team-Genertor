// node module requirements
const fs = require('fs');
const inquirer = require('inquirer');

// team information
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// link to create the page
const createHTML = require('./src/createHTML');

// this is the teams array
const groupArray = [];

// startig the prompts with manager info
const insertManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the name of the project manager:',
                validate: nameValue => {
                    if (nameValue) {
                        return true;
                    } else {
                        console.log("Please enter manager's name");
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'id',
                message: 'Please enter the managers ID:',
                validate: nameInput => {
                    if  (isNaN(nameInput)) {
                        console.log ("Please enter manager's ID");
                        return false; 
                    } else {
                        return true;
                    }
                }
            },

            {
                type: 'input',
                name: 'email',
                message: 'Please enter the managers email:',
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log('Please enter a valid email address');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter the managers office number:',
                validate: nameValue => {
                    if (isNaN(nameValue)) {
                        console.log('Please enter an office number')
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then(managerInfo => {

            const {name, id, email, officeNumber} = managerInfo;
            const manager = new Manager (name, id, email, officeNumber);

            groupArray.push(manager);
        })
};

// prompts for engineer/intern information
const insertEmployee = () => {
    console.log(`
    ----------------------------
    Adding Employees To The Team
    ----------------------------
    `);

    return inquirer
        .prompt ([
            {
                type: 'list',
                name: 'role',
                message: 'Choose employees role',
                choices: ['Engineer', 'Intern']
            },

            {
                type: 'input',
                name: 'name',
                message: 'Please enter employees name:',
                validate: nameValue => {
                    if (nameValue) {
                        return true;
                    } else {
                        console.log("Please enter employees name");
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'id',
                message: 'Please enter employees ID:',
                validate: nameValue => {
                    if (isNaN(nameValue)) {
                        console.log('Please enter the employees ID');
                        return false;
                    } else {
                        return true;
                    }
                }
            },

            {
                type: 'input',
                name: 'email',
                message: 'Please enter employees email:',
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log('Please enter a valid email address');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'github',
                message: 'Please enter employees github username:',
                when: (input) => input.role === 'Engineer',
                validate: nameValue => {
                    if (nameValue) {
                        return true;
                    } else {
                        console.log('Please enter employees github username');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'school',
                message: 'Please enter the interns school:',
                when: (input) => input.role === 'Intern',
                validate: nameValue => {
                    if (nameValue) {
                        return true;
                    } else {
                        console.log('Please enter the school the intern attends');
                        return false;
                    }
                }
            },

            {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Would you like to add another team member?',
                default: false
            }
        ])
        .then(employeeInfo => {

            let {name, id, email, role, github, school, confirmAdd} = employeeInfo;
            let employee;

            if (role === 'Engineer') {

                employee = new Engineer (name, id, email, github);

            } else if (role === 'Intern') {

                employee = new Intern (name, id, email, school);

            }

            groupArray.push(employee);

            if (confirmAdd) {

                return insertEmployee(groupArray);

            } else {

                return groupArray;

            }
        })
};

// function that generates the HTML page 
const generatePage = data => {

    fs.writeFile('./dist/index.html', data, err => {

        if (err) {

            console.log(err)
            return;

        } else {

            console.log('Team profile successfully created! Check dist folder for your file.')

        }
    })
};

insertManager()
    .then(insertEmployee)
    .then(groupArray => {
        return createHTML(groupArray);
    })
    .then(pageHTML => {
        return generatePage(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });