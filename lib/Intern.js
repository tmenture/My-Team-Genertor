// imports Employee constructor 
const Employee = require('./Employee');

// extends Employee properties to Intern constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        // calls to Employee constructor
        super(name, id, email);

        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return 'Intern';
    }
};

// exports Intern constructor to be used across files
module.exports = Intern;