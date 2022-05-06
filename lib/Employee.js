// Employee class, constructor, and methods 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id =  id;
        this.email = email;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return 'Employee';
    }
};

// Exports Employee class to be used across files
module.exports = Employee;