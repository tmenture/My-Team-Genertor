const Employee = require('../lib/Employee');

// test employee object was created
test('Creates Employee Object', () => {
    const employee = new Employee('Thomas', 1, 'thomas@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// tests that getName() grabs the name
test('Grabs Employee Name', () => {
    const employee = new Employee('Thomas', 1, 'thomas@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// tests that getId() grabs employees id
test('Grabs Employee ID', () => {
    const employee = new Employee('Thomas', 1, 'thomas@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// tests that getEmail() grabs employee email
test('Grabs Employee Email', () => {
    const employee = new Employee('Thomas', 1, 'thomas@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// tests that getRole() grabs the employees role in the project
test('Grabs Employees Role', () => {
     const employee = new Employee('Thomas', 1, 'thomas@gmail.com');

     expect(employee.getRole()).toEqual('Employee');
});