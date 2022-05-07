// node module requirements
const fs = require('fs');
const inquirer = require('inquirer');

// team information
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// link to create the page
const createHTML = require('./src/createHTML');