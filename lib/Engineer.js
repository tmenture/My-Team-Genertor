// imports Employee constructor
const Employee = require('./Employee');

// extends Employee properties to Engineer constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calls to the Employee constructor
        super(name, id, email);

        this.github = github;
    }
    
    getGithub () {
        return this.github;
    }

    getRole () {
        return 'Engineer';
    }
};

// exports Engineer constructor to be used across files
module.exports = Engineer;