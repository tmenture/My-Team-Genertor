// imports Employee constructor
const Employee = require('./Employee');

// extends Employee properties to Manager constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calls to Employee constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole () {
        return 'Manager';
    }
};

// exports Manager constructor to be used across files
module.exports = Manager;