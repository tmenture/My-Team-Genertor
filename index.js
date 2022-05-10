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
                message: 'Please enter the name of the project manager:'
            },

            {
                type: 'input',
                name: 'id',
                message: 'Please enter the managers ID:'
            },

            {
                type: 'input',
                name: 'email',
                message: 'Please enter the managers email:'
            },

            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter the managers office number:'
            },
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
                message: 'Please enter employees name:'
            },

            {
                type: 'input',
                name: 'id',
                message: 'Please enter employees ID:'
            },

            {
                type: 'input',
                name: 'email',
                message: 'Please enter employees email:'
            },

            {
                type: 'input',
                name: 'github',
                message: 'Please enter employees github username:',
                when: (input) => input.role === 'Engineer'
            },

            {
                type: 'input',
                name: 'school',
                message: 'Please enter the interns school:',
                when: (input) => input.role === 'Intern'
            },

            {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Would you like to add another team member?',
                default: false
            },
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